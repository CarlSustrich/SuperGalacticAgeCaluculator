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
});
