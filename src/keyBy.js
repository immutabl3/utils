export default function keyBy(arr, key) {
  return arr.reduce((memo, obj) => {
    memo[obj[key]] = obj;
    return memo;
  }, Object.create(null));
};