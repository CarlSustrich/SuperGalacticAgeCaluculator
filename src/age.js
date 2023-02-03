export class Age {
  constructor(inputtedAge) {
    this.currentEarthAge = Number(inputtedAge);
  }

  currentAgeOn(planet) {
    const planetModifier = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86};
    switch (planet) {
      case ('mercury'):
        this.mercuryAge = Math.floor(this.currentEarthAge / planetModifier[planet]);
      case ('venus'):
        this.venusAge = Math.floor(this.currentEarthAge / planetModifier[planet]);
      case ('mars'):
        this.marsAge = Math.floor(this.currentEarthAge / planetModifier[planet]);
      case ('jupiter'):
        this.jupiterAge = Math.floor(this.currentEarthAge / planetModifier[planet]);
    }
  }
}
