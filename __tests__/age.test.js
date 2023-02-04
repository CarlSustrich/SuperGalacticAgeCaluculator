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
  });




  describe('currentAgeOn', () => {

    test('it should create a "mercuryAge" property on the Age object, and assign its value based on a .24:1 equivalence', () => {
      newAge.currentAgeOn('mercury');
      expect(newAge.mercuryAge).toEqual(104)
    });

    test('it should create a "venusAge" property on the Age object, and assign its value based on a .62:1 equivalence', () => {
      newAge.currentAgeOn('venus');
      expect(newAge.venusAge).toEqual(40)
    });

    test('it should create a "marsAge" property on the Age object, and assign its value based on a 1.88:1 equivalence', () => {
      newAge.currentAgeOn('mars');
      expect(newAge.marsAge).toEqual(13)
    });

    test('it should create a "jupiterAge" property on the Age object, and assign its value based on a 11.86:1 equivalence', () => {
      newAge.currentAgeOn('jupiter');
      expect(newAge.jupiterAge).toEqual(2)
    });

    test('it should return false if the inputted planet does not match one of the tested planets', () => {
      const errorTest = newAge.currentAgeOn('fish');
      expect(errorTest).toEqual(false)
    });
  });


  describe('yearsPassed', () => {

    beforeEach(() => {
      newAge.currentEarthAge = 56;
    });
    
    test('it should receive an age less than the users current age and return how many years have passed on the specified planet since then', () => {
      let returnText = newAge.yearsPassed('43', 'mercury');
      expect(returnText).toEqual('In the 13 earth years that have passed, 54.17 mercury years have passed.')

      returnText = newAge.yearsPassed('43', 'venus');
      expect(returnText).toEqual('In the 13 earth years that have passed, 20.97 venus years have passed.')

      returnText = newAge.yearsPassed('43', 'mars');
      expect(returnText).toEqual('In the 13 earth years that have passed, 6.91 mars years have passed.')

      returnText = newAge.yearsPassed('43', 'jupiter');
      expect(returnText).toEqual('In the 13 earth years that have passed, 1.10 jupiter years have passed.')
    });

    test('it should receive an age greater than the users current age and return how many years have yet to pass on the specified planet until then', () => {
      let returnText = newAge.yearsPassed('61', 'mercury');
      expect(returnText).toEqual('In the 5 earth years that have yet to pass, 20.83 mercury years have yet to pass.')

      returnText = newAge.yearsPassed('61', 'venus');
      expect(returnText).toEqual('In the 5 earth years that have yet to pass, 8.06 venus years have yet to pass.')

      returnText = newAge.yearsPassed('61', 'mars');
      expect(returnText).toEqual('In the 5 earth years that have yet to pass, 2.66 mars years have yet to pass.')

      returnText = newAge.yearsPassed('61', 'jupiter');
      expect(returnText).toEqual('In the 5 earth years that have yet to pass, 0.42 jupiter years have yet to pass.')
    
    });


  });

});
