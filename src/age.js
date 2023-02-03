export class Age {
  constructor(inputtedAge) {
    this.currentEarthAge = Number(inputtedAge);
    this.planetModifier = {mercury: 0.24, venus: 0.62, mars: 1.88, jupiter: 11.86};
  }

  currentAgeOn(planet) {
    let planetAge = Math.floor(this.currentEarthAge / this.planetModifier[planet]);
    let returnString = `You would be ${planetAge} years old on ${planet}`;
    switch (planet) {
      case ('mercury'):
        this.mercuryAge = planetAge;
        return returnString;
      case ('venus'):
        this.venusAge = planetAge;
        return returnString;
      case ('mars'):
        this.marsAge = planetAge;
        return returnString;
      case ('jupiter'):
        this.jupiterAge = planetAge;
        return returnString;
      default:
        return false;
    }
  }

  yearsPassed(age, planet) {
    const earthYearsPassed = Math.abs(this.currentEarthAge - age);
    const planetYearsPassed =  (earthYearsPassed/ this.planetModifier[planet]).toFixed(2);
    const stringModifier = this.currentEarthAge > age ? 'have passed' : 'have yet to pass';
    return `In the ${earthYearsPassed} earth years that ${stringModifier}, ${planetYearsPassed} ${planet} years ${stringModifier}.`;
  }

  daysUntil(birthday, planet) {
    let bdayObj = new Date(birthday);
    const now = new Date();
    const oneYearInMS = (new Date('2023,01,01') - new Date('2022,01,01'));
    const oneDayInMS = 86400000;
    bdayObj.setFullYear(now.getFullYear());
    let mSBetween;
    bdayObj > now ? mSBetween = (bdayObj - now) : mSBetween = oneYearInMS - (Math.abs(bdayObj - now)) ;
    return `${(mSBetween/oneDayInMS).toFixed(2)} days until your birthday, on earth, or ${((mSBetween/this.planetModifier[planet])/oneDayInMS).toFixed(2)} days until your birthday on ${planet}.`
  }
}
