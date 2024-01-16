export default globalThis.structuredClone
  ? globalThis.structuredClone 
  : (obj: unknown) => JSON.parse(JSON.stringify(obj));