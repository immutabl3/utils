export default function constant(val) {
  return () => val;
};