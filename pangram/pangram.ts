/* BRIEF
 *
 * Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:
 * The quick brown fox jumps over the lazy dog.
 * The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
 *
 */

export default class Pangram {
  public sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    const notAlphabetRegex = /[^A-Za-z]*/gm
    this.sentence = this.sentence.replace(notAlphabetRegex, '');
    if (!this.sentence.length) return false;

    return ((sentence: string): boolean => {
      const charSet = [... new Set(sentence.toLowerCase().split('').sort())];
      return charSet.length === 26;
    })(this.sentence);
  }
};
