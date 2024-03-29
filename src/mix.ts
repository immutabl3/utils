export default function mix(...sources: any[]): any {
  const [base, ...rest] = sources;
  
  for (const source of rest) {
    for (const prop of Object.keys(source)) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop);
      if (descriptor) {
        Object.defineProperty(base, prop, descriptor);
      }
    }
  }

  return base;
};