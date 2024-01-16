export default function debounce<T = unknown>(fn: (_?: T) => void, delayMs = 0, { leading } = { leading: false }) {
  let timerId: Timer;

  return function debounced(arg?: T) {
    if (!timerId && leading) fn(arg);

    clearTimeout(timerId);

    timerId = setTimeout(() => fn(arg), delayMs);
  };
};