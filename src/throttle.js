// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export default function throttle(fn, wait = 0, {
  leading = false,
  trailing = false,
} = {}) {
  let arg;
  let result;
  let timeout = -1;
  let previous = -1;

  const later = function() {
    previous = leading === false ? 0 : performance.now();
    timeout = null;
    result = fn(arg);
    if (timeout === -1) arg = null;
  };

  return function throttled(props) {
    const now = performance.now();

    if (!previous && leading === false) previous = now;

    const remaining = wait - (now - previous);
    arg = props;
    if (remaining <= 0 || remaining > wait) {
      if (timeout !== -1) {
        clearTimeout(timeout);
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