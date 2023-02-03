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
    const earthYearsPassed = Math.abs(this.currentEarthAge - age)
    const planetYearsPassed =  (earthYearsPassed/ planetModifier[planet]).toFixed(2)
    const stringModifier = this.currentEarthAge > age ? 'have passed' : 'have yet to pass'
    return `In the ${earthYearsPassed} earth years that ${stringModifier}, ${planetYearsPassed} ${planet} years ${stringModifier}.`
  }
  
}
