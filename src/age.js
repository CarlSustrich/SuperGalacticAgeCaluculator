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
      default:
        return false;
    }
  }

    yearsPassed(age, planet) {
      const planetModifier = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86};
      let earthYearsPassed = Math.abs(this.currentEarthAge - age)
      let planetYearsPassed =  (earthYearsPassed/ planetModifier[planet]).toFixed(2)
      return `In the ${earthYearsPassed} earth years that have passed since then, ${planetYearsPassed} ${planet} years have passed.`
    }
}
