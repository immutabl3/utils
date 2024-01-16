export const uniqueId = function(): () => number {
  let counter = 0;
  return function uniqueId(): number {
    counter++;
    return counter;
  };
};

export default uniqueId();