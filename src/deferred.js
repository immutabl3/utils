import noop from './noop';

class Deferred {
  constructor() {
    this.resolve = noop;
    this.reject = noop;

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};

export default function DeferredFactory() {
  return new Deferred();
};