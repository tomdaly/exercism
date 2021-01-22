/*
 * BRIEF
 *
 * Create an implementation of the atbash cipher, an ancient encryption system created in the Middle East.
 *
 * The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
 *
 * An Atbash cipher for the Latin alphabet would be as follows:
 *
 * Plain:  abcdefghijklmnopqrstuvwxyz
 * Cipher: zyxwvutsrqponmlkjihgfedcba
 * It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
 *
 * Ciphertext is written out in groups of fixed length, the traditional group size being 5 letters, and punctuation is excluded. This is to make it harder to guess things based on word boundaries.
 *
 * Examples
 * Encoding test gives gvhg
 * Decoding gvhg gives test
 * Decoding gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt gives thequickbrownfoxjumpsoverthelazydog
 */

export default class AtbashCipher {

  encode(plainText: string): string {
    const stripped = plainText.replace(/[^A-Za-z0-9]*/g, '').toLowerCase();
    const encoded = stripped.split('').map((char: string) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) { // ASCII 97 = a, 109 = m, 110 = n, 122 = z
        return String.fromCharCode(110 + (109 - charCode));
      }
      return String.fromCharCode(charCode);
    }).join('').match(/.{1,5}/g);
    return encoded ? encoded.join(' ') : '';
  }

  decode(cipherText: string): string {
    const stripped = cipherText.replace(/\s*/g, '');
    return stripped.split('').map((char: string) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) { // ASCII 97 = a, 109 = m, 110 = n, 122 = z
        return String.fromCharCode(109 - (charCode - 110));
      }
      return String.fromCharCode(charCode);
    }).join('');
  }
}

