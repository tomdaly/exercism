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
    return -1;
  }

  isPythagorean(): boolean {
    return false;
  }

  static where(...triplets: any[]): Triplet[] {
    return triplets;
  }
}
