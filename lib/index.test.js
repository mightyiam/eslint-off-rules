const { test } = require('ava')

const subject = require('.')

const expectedIOs = [
  {
    i: [],
    o: {},
    name: 'no rules'
  },
  {
    i: ['semi'],
    o: { semi: 'off' },
    name: 'one rule'
  },
  {
    i: ['semi', 'quotes'],
    o: { semi: 'off', quotes: 'off' },
    name: 'two rules'
  },
  {
    i: ['semi', 'quotes', 'yoda'],
    o: { semi: 'off', quotes: 'off', yoda: 'off' },
    name: 'three rules'
  },
  {
    i: ['semi', 'semi'],
    o: { semi: 'off' },
    name: 'double rule'
  }
]

const expectedErrors = [
  {
    i: [0],
    name: 'falsy number as rule'
  },
  {
    i: [1],
    name: 'truthy number as rule'
  },
  {
    i: 'foo',
    name: 'string as input'
  }
]

test('exports a function of arity 1', t => {
  t.is(typeof subject, 'function')
  t.is(subject.length, 1)
})

expectedIOs.forEach(({ i, o, name }) => {
  test(name, t => {
    t.deepEqual(subject(i), o)
  })
})

expectedErrors.forEach(({ i, name }) => {
  test(name, t => {
    t.throws(() => { subject(i) })
  })
})
