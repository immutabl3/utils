export default function lerp(v0 = 0, v1 = 0, t = 0.1) {
  return v0 * (1 - t) + v1 * t;
};