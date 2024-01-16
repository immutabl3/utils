// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export default function throttle<T = unknown>(fn: (_?: T | null) => void, wait: number = 0, {
  leading = false,
  trailing = false,
} = {}) {
  let arg: T | null | undefined;
  let result: any;
  let timeout: number | Timer | null = -1;
  let previous: number = -1;

  const later = function() {
    previous = leading === false ? 0 : performance.now();
    timeout = null;
    result = fn(arg);
    if (timeout === -1) arg = null;
  };

  return function throttled(props?: T) {
    const now = performance.now();

    if (!previous && leading === false) previous = now;

    const remaining = wait - (now - previous);
    arg = props;
    if (remaining <= 0 || remaining > wait) {
      if (timeout !== -1) {
        clearTimeout(timeout as Timer);
        timeout = null;
      }

      previous = now;
      result = fn(arg);
      if (timeout === -1) arg = null;
    } else if (timeout === -1 && trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    
    return result;
  };
};