const assert = require('assert')
const pigIt = require('./pig-it')

describe('pig-it', () => {
  it('Pig latin is cool => igPay atinlay siay oolcay', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
  })
  it('This is my string => hisTay siay ymay tringsay', () => {
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  })
  it('O tempora o mores ! => Oay emporatay oay oresmay !', () => {
    assert.strictEqual(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !')
  })
  it('Quis custodiet ipsos custodes ? => uisQay ustodietcay psosiay ustodescay ?', () => {
    assert.strictEqual(pigIt('Quis custodiet ipsos custodes ?'), 'uisQay ustodietcay psosiay ustodescay ?')
  })
})