export const setLetterUpper = (word: string): string =>
  (word = word[0].toUpperCase() + word.slice(1, word.length));
