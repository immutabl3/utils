export default function random(min = 0, max = 1): number {
  return Math.random() * (max - min) + min;
};