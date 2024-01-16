export default function omit<T, K extends keyof T>(obj: T, props: K[]): Omit<T, K> {
  const o = { ...obj };
  // @ts-ignore
  for (const prop of props) delete o[prop];
  return o as Omit<T, K>;
};
