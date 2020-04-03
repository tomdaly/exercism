/*
 * BRIEF
 * Given an age in seconds, calculate how old someone would be on:
 *  Earth: orbital period 365.25 Earth days, or 31557600 seconds
 *  Mercury: orbital period 0.2408467 Earth years
 *  Venus: orbital period 0.61519726 Earth years
 *  Mars: orbital period 1.8808158 Earth years
 *  Jupiter: orbital period 11.862615 Earth years
 *  Saturn: orbital period 29.447498 Earth years
 *  Uranus: orbital period 84.016846 Earth years
 *  Neptune: orbital period 164.79132 Earth years
 * e.g. 1,000,000,000 seconds is 31.69 Earth years
 *
 */
export default class SpaceAge {
  // public by default
  // prefix with '#' or 'private' for private
  seconds: number;

  // can use `constructor(seconds: number) {}` as shorthand for constructor and field declaration
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private round(unrounded: number): number {
    return Math.round(unrounded * 100) / 100;
  }

  onEarth(): number {
    return this.round(this.seconds / 31557600);
  }

  onMercury(): number {
    return this.round(this.onEarth() / 0.2408467);
  }

  onVenus(): number {
    return this.round(this.onEarth() / 0.61519726);
  }

  onMars(): number {
    return this.round(this.onEarth() / 1.8808158);
  }

  onJupiter(): number {
    return this.round(this.onEarth() / 11.862615);
  }

  onSaturn(): number {
    return this.round(this.onEarth() / 29.447498);
  }

  onUranus(): number {
    return this.round(this.onEarth() / 84.016846);
  }

  onNeptune(): number {
    return this.round(this.onEarth() / 164.79132);
  }
}

