export const decodedResistorValue = (codes: string[]): number => {
  // const ohmExponent = COLORS.indexOf(codes[2])
  const ohms = parseInt(codes.slice(0, 2).map((code) => COLORS.indexOf(code)).join(""));
  return `${ohms} ohms`;
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

const METRIC_PREFIX = [
  'kilo',
  'mega',
  'giga'
]
