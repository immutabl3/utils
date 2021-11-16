export const uniqueId = function() {
  let counter = 0;
  return function uniqueId() {
    counter++;
    return counter;
  };
};

export default uniqueId();