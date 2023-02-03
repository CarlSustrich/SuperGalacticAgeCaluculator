import { Age } from './../src/age.js'


describe('Age Object Functionality', () => {
  
  let newAge;
  beforeEach(() => {
    newAge = new Age(25);
  });
  

  test('it should take in a users age, and store it as an object property of number data type', () => {
    expect(newAge.currentEarthAge).toEqual(25);
  });

  test('it should complete the last tests functionality, whether a string or number is passed in', () => {
    let stringAge = new Age('25');
    expect(stringAge.currentEarthAge).toEqual(25);
  })




  describe('currentAgeOn', () => {

    test('it should create a "mercuryAge" property on the Age object, and assign its value based on a .24:1 equivalence', () => {
      newAge.currentAgeOn('mercury');
      expect(newAge.mercuryAge).toEqual(104)
    });

  });
});
