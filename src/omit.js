export default function omit(obj, props) {
  const o = { ...obj };
  for (const prop of props) delete o[prop];
  return o;
};