export function toRna(input: string): string {
  let output = "";
  for (const char of input) {
    const remap = transcriptionMap[char];
    if (remap === undefined) {
      throw "Invalid input DNA."
    }
    output += transcriptionMap[char];
  }
  return output;
}

const transcriptionMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}
