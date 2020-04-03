/*
 * BRIEF
 * A Pythagorean triplet is a set of three natural numbers, {a, b, c}, for which,
 *   a**2 + b**2 = c**2
 * and such that,
 *   a < b < c
 * For example,
 *   3**2 + 4**2 = 9 + 16 = 25 = 5**2.
 * Given an input integer N, find all Pythagorean triplets for which a + b + c = N.
 * For example, with N = 1000, there is exactly one Pythagorean triplet for which a + b + c = 1000: {200, 375, 425}.
 */

export default class Triplet {
  constructor(
    private a: number,
    private b: number,
    private c: number
  ) {}

  sum(): number {
    return this.a + this.b + this.c;
  }

  product(): number {
    return this.a * this.b * this.c;
  }

  isPythagorean(): boolean {
    const aSq = this.a * this.a;
    const bSq = this.b * this.b;
    const cSq = this.c * this.c;
    return (aSq + bSq == cSq);
  }

  static where(...input: any[]): Triplet[] {
    const triplets: Triplet[] = [];
    input = input.filter(elem => elem != null).sort();
    const smallest = Math.min(...input);
    const biggest = Math.max(...input);

    for (let n = smallest; n <= biggest; n++) {
      for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
          for (let k = j + 1; k <= n; k++) {
            const triplet = new Triplet(i, j, k);
            if (triplet.isPythagorean()) {
              triplets.push(triplet);
            }
          }
        }
      }
    }
    return triplets;
  }
}

