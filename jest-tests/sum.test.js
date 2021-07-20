const sum = require('./sum')

// toBe use Object.is to test equality. toBe compares the exact value
test('adds 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3)
})

// toEqual compares the objects
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// test the opposite of a matcher, negation
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// testing for null, undefined and false 
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// test methods for numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// testing floating points
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2

    // expect(value).toBe(0.3) // this won't work
    expect(value).toBeCloseTo(0.3)
})

// string matchers
test('There is no i in teams', () => {
    expect('teams').not.toMatch(/i/)
})

test('There is stop in cristoph', () => {
    expect('cristoph').toMatch(/stop/)
})

test('The shopping list has milk on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk');
})

function compileAndroidCode() {
    throw new Error('You are using the wrong JDK')
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    expect(() => compileAndroidCode()).toThrow('You are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
})

// tests using callbacks
// testing asynchronous code. Notice the try catch block, if omitted you won't know what the test case failed
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }

    // fetchData is the method that you want to test
    fetchData(callback)
})

// asynchronous test with promises
test('the data is peanut butter', () => {
    return fetchData().then(data => expect(data).toBe('peanut butter'))
})

test('the fetch fails with an error', () => {
    expect.assertions(1)
    return fetchData().catch(e => expect(e).toMatch('error'))
})

// you can also use resolves and rejects with promises
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error')
})

// test async/await 
test('the data is peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

// test async/await error 
test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
        await fetchData()
    } catch (e) {
        expect(e).toMatch('error')
    }
})

// test async await using promises
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with error', async () => {
    await expect(fetchData()).rejects.toMatch('error')
})

// hook/setup
beforeEach(() => {
    initializeCityDatabase()
})

// hook/tear down
afterEach(() => {
    clearCityDatabase()
})

test('city database has vienna', () => {
    expect(isCity('Vienna')).toBeTruthy()
})

test('city database has san juan', () => {
    expect(isCity('San Juan')).toBeTruthy()
})

// if your method returns a promise, don't forget to include the return statement
beforeEach(() => {
    return initializeCityDatabase()
})

// hook/setup only once
beforeAll(() => {
    initializeCityDatabase()
})

// hook/tear down only once
afterAll(() => {
    clearCityDatabase()
})

// test group.
describe('group of related tests', () => {
    beforeEach(() => {
        console.log('this before each only applies to this group enclosed by the describe function')
    })

    test('some test', () => {
        console.log('some test')
    })
})

// All the code inside describe is executed before the tests (even the ones inside the describe function). Look
// at the following code exerpt to better understand
describe('outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner 1');
        test('test 1', () => {
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', () => {
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2');
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});

// the output is:
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

// execute only one test. Useful when you want to know if a failing test fails when is executed isolated
test.only('this will be the only tests that runs', () => {
    expect(true).toBe(false)
})

test('this test will not run', () => {
    expect('A').toBe('A')
})

// mock functions
// lets said we want to mock the following function
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockFunction = jest.fn(x => 42 + x)
forEach([0, 1], mockFunction)

expect(mockFunction.mock.calls.length).toBe(2)
expect(mockFunction.mock.calls[0][0]).toBe(0)
expect(mockFunction.mock.calls[1][0]).toBe(1)
expect(mockFunction.mock.results[0].value).toBe(42)
// validate how many times the function was instantiated
expect(mockFunction.mock.instances.length).toBe(1)
// name property of the test that instantiated the mock function
expect(mockFunction.mock.instances[0].name).toEqual('test')

// returning mock values
const mockFunction = jest.fn()

mockFunction.mockReturnValueOnce(10).mockReturnValueOnce('test').mockReturnValue(true)
console.log(mockFunction(), mockFunction(), mockFunction(), mockFunction())
// 10, test, true, true

// mocking modules, like third party modules as axios
const Users = require('./users.js')
const axios = require('axios')

jest.mock('axios')

test('should fetch users', () => {
    const users = [{ name: 'Bob' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)
    // or you could also replace the previous line for the next one
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(resp => expect(resp.data).toEqual(users))
})

// mock implementations
const myMockFn = jest.fn(cb => cb(null, true))
myMockFn((error, value) => console.log(val))

// mock implementation for a module
jest.mock('./foo')
const foo = require('./foo.js')

foo.mockImplementation(() => 42)
foo()
// 42

// mock default implementation
const myMockFn = jest.fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call')

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())
// first call, second call, default, default

// mock chained functions
const myObj = {
    myMethod: jest.fn().mockReturnThis()
}

// the previous object is the same as
const otherObj = {
    myMethod: jest.fn(() => {
        return this
    })
}

// mock names
const myMockFn = jest.fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42')

// custom matchers
expect(myMockFn).toHaveBeenCalled() // at least once
expect(myMockFn.mock.calls.length).toBeGreaterThan(0) // same as previous line
expect(myMockFn).toHaveBeenCalledWith(arg1, arg2) // at least once with the specified arguments
expect(myMockFn.mock.calls).toContainEqual([arg1, arg2]) // same as previous line
expect(myMockFn).toHaveBeenLastCalledWith(arg1, arg2) // last call was with the specified arguments
expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1]).toEqual([arg1, arg2])
// check that the first argument of the last call was 42
expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1][0]).toBe(42)
// check mock name
expect(myMockFn.getMockName()).toBe('a mock name')

// jest spy on a method
// lets say there is a file called math.js that contains aritmethic functions
const math = require('./math.js')
test('spying on methods', () => {
    const spy = jest.spyOn(math, 'add')
    const result = math.add(1, 2)

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(1, 2)
})



