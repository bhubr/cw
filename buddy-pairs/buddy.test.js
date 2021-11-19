const assert = require('assert')
const buddy = require('./buddy')

describe('buddy-pairs', () => {
  const itBench = (label, fn) => {
    it(label, () => {
      const d1 = Date.now()
      fn()
      console.log (`${Date.now() - d1}ms elapsed`)
    });
  }
  itBench('23, 4669 -> [48, 75]', () => {
    assert.deepStrictEqual(buddy(23, 4669), [48, 75])
  })
  it('4952, 6539 -> [5775, 6128]', () => {
    assert.deepStrictEqual(buddy(4952, 6539), [5775, 6128])
  })
  it('381, 4318 -> [1050, 1925]', () => {
    assert.deepStrictEqual(buddy(381, 4318), [1050, 1925])
  })
})
