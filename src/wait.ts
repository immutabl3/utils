declare global {
  function requestAnimationFrame(callback: (_: unknown) => void): number;
}

const hasRaf = !!globalThis.requestAnimationFrame;

const rafWait = function(): Promise<void> {
  return new Promise(resolve => {
    globalThis.requestAnimationFrame(() => resolve());
  });
};

const delayWait = function(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export default function wait(ms = 0): Promise<void> {
  return (ms === 0 && hasRaf ? rafWait : delayWait)(ms);
};