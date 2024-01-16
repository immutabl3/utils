// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

const rHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const rHexShort = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;

const hexToRgb = (hex: string) => {
  const isShort = hex.length === 4;
  const [_, r, g, b] = (isShort ? rHexShort.exec(hex) : rHex.exec(hex)) as string[];
  return [
    parseInt(isShort ? `${r}${r}` : r!, 16),
    parseInt(isShort ? `${g}${g}` : g!, 16),
    parseInt(isShort ? `${b}${b}` : b!, 16),
  ];
};

export default function rgba(hex: string, alpha = 1): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};