export default function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((newObj: Pick<T, K>, key: K) => {
    // @ts-ignore
    if (key in obj) newObj[key] = obj[key];
    return newObj;
  }, {} as Pick<T, K>);
};