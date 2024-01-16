export default function keyBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T> {
  return arr.reduce((memo: Record<string, T>, obj: T) => {
    memo[obj[key] as unknown as string] = obj;
    return memo;
  }, {} as Record<string, T>);
};