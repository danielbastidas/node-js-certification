const fancify = require(process.argv[2])
const test = require('tape')

test('Wrapping characters OK', (t) => {
    t.same(fancify('Hello'), '~*~Hello~*~', 'Wrapped string should be ~*~Hello~*~')
    t.end()
})

test('All characters capitalized OK', (t) => {
    t.same(fancify('Hello', true), '~*~HELLO~*~', 'All characters should be capitalized')
    t.end()
})

test('Middle character OK', (t) => {
    t.same(fancify('Hello', false, '!'), '~!~Hello~!~', 'Middle character should be !')
    t.end()
})