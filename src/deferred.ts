import defer from './defer';

type Deferred = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  promise: Promise<unknown>;
}

export default async function deferred(): Promise<Deferred> {
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