export default function isError(err) {
  return err && err instanceof Error;
};