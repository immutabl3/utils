export default function pick(obj, keys) {
  return keys.reduce((newObj, key) => {
    if (obj.hasOwnProperty(key)) newObj[key] = obj[key];
    return newObj;
  }, {});
};