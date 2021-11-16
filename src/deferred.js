import defer from './defer.js';

export default async function deferred() {
  return new Promise(res => {
    const promise = new Promise((resolve, reject) => {
      defer(() => {
        res({
          resolve,
          reject,
          promise,
        });
      });
    });
  });
};