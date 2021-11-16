export default function attempt(fn) {
  try {
    return fn();
  } catch (err) {
    return err;
  }
};