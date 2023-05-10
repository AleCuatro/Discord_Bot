
export function separator(n) {
    if (n >= 1000000) {
      n = n / 1000000;
      return Math.round(n) + 'M';
    } else if (n >= 1000) {
      n = n / 1000;
      return Math.round(n) + 'K';
    } else {
      return n;
    }
}