const hsl = require('./index')
const test = require('tap').test

test('pure white', function (assert) {
  const expected = '#ffffff'
  const actual = hsl(0, 100, 100)
  const it = 'max saturation and luminosity should return pure white'
  assert.same(actual, expected, it)
  assert.end()
})

test('medium gray', function (assert) {
  const expected = '#808080'
  const actual = hsl(0, 0, 50)
  const it = '0% saturation, 50% luminosity should be medium gray'
  assert.same(actual, expected, it)
  assert.end()
})

// Note that you can group test cases
test('hue', ({ same, end }) => {
  {
    const expected = '#ff0000'
    const actual = hsl(0, 100, 50)
    const it = `
      0deg should be red
    `
    same(actual, expected, it)
  }
  {
    const expected = '#0000ff'
    const actual = hsl(240, 100, 50)
    const it = `
      240deg should be blue
    `
    same(actual, expected, it)
  }
  {
    const expected = '#00ffff'
    const actual = hsl(180, 100, 50)
    const it = `
      180deg should be cyan
    `
    same(actual, expected, it)
  }
  end()
})

test('degree overflow', function (assert) {
  const expected = hsl(1, 100, 50)
  const actual = hsl(361, 100, 50)
  const it = '361deg should be the same as 1deg'
  assert.same(actual, expected, it)
  assert.end()
})

test('degree underflow', function (assert) {
  const expected = hsl(-1, 100, 50)
  const actual = hsl(359, 100, 50)
  const it = '-1deg should be the same as 359deg'
  assert.same(actual, expected, it)
  assert.end()
})

test('max constraint', function (assert) {
  const expected = hsl(0, 101, 50)
  const actual = hsl(0, 100, 50)
  const it = '101% should be the same as 100%'
  assert.same(actual, expected, it)
  assert.end()
})

test('max constraint', function (assert) {
  const expected = hsl(0, -1, 50)
  const actual = hsl(0, 0, 50)
  const it = '-1% should be the same as 0%'
  assert.same(actual, expected, it)
  assert.end()
})

test('Invalid argument infinity', function (assert) {
  const expected = '#808080'
  const actual = hsl(Infinity, 0, 50)
  const it = 'Default white color should be returned'
  assert.same(actual, expected, it)
  assert.end()
})
