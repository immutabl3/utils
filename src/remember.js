// https://github.com/redabacha/remember-promise
const defaultGetCacheKey = (...args) => JSON.stringify(args);

// utility to remember promises that were made by a given function
export default function rememberPromise(promiseFn, {
  ttl = 0,
  // This enables stale-while-revalidate behavior where an expired result 
  // can still be used while waiting for it to be updated in the background 
  // asynchronously. By default this is set to true so the behavior is enabled.
  allowStale = true,
  // This is where cached results will be stored. It can be anything you 
  // want such as lru-cache or a redis backed cache as long as it implements 
  // a get and set method defined in the AsyncMapLike type. By default this 
  // is a new instance of Map.
  cache = new Map(),
  // Identical behavior to the cacheKey option in p-memoize. It should 
  // return what the cache key based on the parameters of a given promise 
  // function. By default this will serialize all arguments using JSON.stringify.
  getCacheKey = defaultGetCacheKey,
  // Use this to catch errors when attempting to update the cache or if 
  // shouldIgnoreResult throws an error. By default this is undefined which 
  // means any errors will be rethrown as an unhandled promise rejection.
  onCacheUpdateError,
  // Determines whether the returned result should be added to the cache. 
  // By default this is undefined which means it will always use the returned 
  // result for caching.
  shouldIgnoreResult,
  // This is the beta value used in optimal probabilistic cache stampede 
  // prevention where values more than 1 favors earlier revalidation while 
  // values less than 1 favors later revalidation. By default this is set 
  // to 1 so the revalidation of a cached result will happen at a random 
  // time slightly before expiry. If you wish to opt-out of this behavior, 
  // then set this value to 0
  xfetchBeta = 1,
} = {}) {
  const updatePromises = new Map();
  const shouldUpdate = ttl
    ? (lastUpdated, xfetchDelta) => Date.now() - xfetchDelta * xfetchBeta * Math.log(Math.random()) > lastUpdated + ttl
    : lastUpdated => !lastUpdated;
  return async function remembered(...args) {
    const cacheKey = getCacheKey(...args);
    const cacheValue = await cache.get(cacheKey);
    if (!cacheValue || shouldUpdate(cacheValue.lastUpdated, cacheValue.xfetchDelta)) {
      let updatePromise = updatePromises.get(cacheKey);
      if (!updatePromise) {
        const startTime = Date.now();
        updatePromise = promiseFn(...args);
        updatePromises.set(cacheKey, updatePromise);
        const result = await updatePromise;
        try {
          const ignoredResult = shouldIgnoreResult
            ? await shouldIgnoreResult(result, args)
            : false;
          if (!ignoredResult) {
            const lastUpdated = Date.now();
            await cache.set(cacheKey, {
              result,
              lastUpdated,
              xfetchDelta: lastUpdated - startTime,
            });
          }
        } catch (e) {
          if (onCacheUpdateError) {
            onCacheUpdateError(e);
          } else {
            throw e;
          }
        } finally {
          updatePromises.delete(cacheKey);
        }
      }
      if (!allowStale || !cacheValue) {
        return updatePromise;
      }
    }
    return cacheValue.result;
  };
};