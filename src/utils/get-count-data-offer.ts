export const getCountDataOffer = (count: number, word: string): string =>
  count > 1 ? `${count} ${word}s` : `${count} ${word}`;
