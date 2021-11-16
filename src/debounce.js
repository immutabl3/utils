export default function debounce(fn, delayMs, { leading } = {}) {
  let timerId;

  return function debounced(arg) {
    if (!timerId && leading) fn(arg);

    clearTimeout(timerId);

    timerId = setTimeout(() => fn(arg), delayMs);
  };
};