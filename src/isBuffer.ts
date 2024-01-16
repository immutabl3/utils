export default function isBuffer(value?: unknown): boolean {
  // @ts-ignore
  return !!value?.constructor?.isBuffer?.(value);
};
