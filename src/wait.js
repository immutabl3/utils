const hasRaf = !!globalThis.requestAnimationFrame;

const rafWait = function() {
  return new Promise(resolve => {
    globalThis.requestAnimationFrame(resolve);
  });
};

const delayWait = function(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export default function wait(ms = 0) {
  return (ms === 0 && hasRaf ? rafWait : delayWait)(ms);
};