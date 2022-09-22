export default function pick(obj, keys) {
  return keys.reduce((newObj, key) => {
    if (key in obj) newObj[key] = obj[key];
    return newObj;
  }, {});
};