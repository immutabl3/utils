export default function zip(arr, arr2) {
  return arr.map((value, idx) => [value, arr2[idx]]);
};
