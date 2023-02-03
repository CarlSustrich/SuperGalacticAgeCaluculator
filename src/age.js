export class Age {
  constructor(inputtedAge) {
    this.currentEarthAge = Number(inputtedAge);
  }

  currentAgeOn(planet) {
    const planetModifier = {mercury: 0.24};
    this.mercuryAge = Math.floor(this.currentEarthAge / planetModifier[planet]);
  }
}
