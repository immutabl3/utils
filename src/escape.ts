const map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export default function escape(str: string): string {
  // @ts-ignore
  return str.replace(/[&<>"']/g, m => map[m] ?? '');
};
