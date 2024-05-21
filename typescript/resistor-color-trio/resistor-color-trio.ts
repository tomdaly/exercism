export const decodedResistorValue = (codes: string[]): string => {
  const ohms = parseInt(codes.slice(0, 2).map((code) => COLORS.indexOf(code)).join(""));
  const exponent = COLORS.indexOf(codes[2]);
  const totalOhms = ohms * (10 ** exponent);

  return convertToMetricPrefix(totalOhms);
}

const convertToMetricPrefix = (totalOhms: number): string => {
  for (const key in METRIC_PREFIX) {
    const prefixValue = METRIC_PREFIX[key];
    const divided = totalOhms / prefixValue;
    if (divided > 1) {
      return `${divided} ${key}`;
    }
  }
  return `${totalOhms} ohms`;
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

const METRIC_PREFIX: { [index: string]: number} = {
  'gigaohms': 1000000000,
  'megaohms': 1000000,
  'kiloohms': 1000,
}
