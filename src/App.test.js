const fn = require('./utils/functions')
    , axios = require('axios')

let cars = []

beforeAll( async () => {
  let data = await axios.get('http://localhost:3005/api/cars')
  cars = data.data
  console.log(cars);
})

describe('get cars on page load', () => {

  test('testing json data of cars', () => {
    expect.assertions(1)
    return fn.getCars('http://localhost:3005/api/cars').then( res => {
      expect(typeof res[0]).toBe('object')
    })
  })
})

    test('get random number', () => {
      expect(fn.getRandomNumber()).toBeLessThanOrEqual(10)
      expect(fn.getRandomNumber()).toBeGreaterThanOrEqual(1)
    })

    test('filter cars by id', () => {
      expect(fn.getCarsById(1, cars)[0]).toEqual(cars[0])
    })