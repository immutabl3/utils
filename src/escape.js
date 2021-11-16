const map = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export default function escape(str) {
  return str.replace(/[&<>"']/g, m => map[m] ?? '');
};
