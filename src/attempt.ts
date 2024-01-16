export default function attempt<T = unknown>(fn: () => T): T | Error {
  try {
    return fn();
  } catch (err) {
    return err as Error;
  }
};