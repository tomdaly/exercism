export const decodedValue = (codes: string[]): number => {
  return parseInt(codes.slice(0, 2).map((code) => COLORS.indexOf(code)).join(""));
}

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
