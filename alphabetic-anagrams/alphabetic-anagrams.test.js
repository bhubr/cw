const assert = require('assert')
const alphabeticAnagrams = require('./alphabetic-anagrams')

/*
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743
*/

describe('alphabetic-anagrams', () => {
  // it('ABAB should be at position 2', () => {
  //   assert.strictEqual(alphabeticAnagrams('ABAB'), 2)
  // })
  // it('ABBA should be at position 3', () => {
  //   assert.strictEqual(alphabeticAnagrams('ABBA'), 3)
  // })
  // it('BAAA should be at position 4', () => {
  //   assert.strictEqual(alphabeticAnagrams('BAAA'), 4)
  // })
  it('QUESTION should be at position 24572', () => {
    const d1 = Date.now()
    assert.strictEqual(alphabeticAnagrams('QUESTION'), 24572)
    const d2 = Date.now()
    console.log(d2 - d1)
  })
  it('BOOKKEEPER should be at position 10743', () => {
    const d1 = Date.now()
    assert.strictEqual(alphabeticAnagrams('BOOKKEEPER'), 10743)
    const d2 = Date.now()
    console.log(d2 - d1)
  })
})