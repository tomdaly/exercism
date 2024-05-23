export function isLeap(year: number): bool {
  const divisibleByFour = year % 4 == 0;
  if (divisibleByFour) {
    const divisibleByOneHundred = year % 100 == 0;
    const divisibleByFourHundred = year % 400 == 0;
    return divisibleByOneHundred ? divisibleByFourHundred : true;
  }
  return false
}
