const functions = require('../index');


// get functions
   const {
    reverseNum,
    bubbleSort,
                } = functions;


// toEqual

    describe("reverseNum", () => {

    test("whether numbers are reversed", () => {
        expect(reverseNum(82)).toEqual(28);
    })
})


describe("bubbleSort", () => {
    const arr = [3, 6, 1, 2];

  // toHaveLength

    test("whether length has not changed", () => {
        expect(bubbleSort(arr)).toHaveLength(arr.length);
    })

    // toBeTruthy

    test("if the last number is smaller than first", () => {
        const sorted = bubbleSort(arr)
        expect(sorted[sorted.length - 1] < sorted[0]).toBeTruthy()
    })

})

  
describe("test_primes", () => {
     // toHaveReturned

    test("if function returns value", () => {
        const spy = jest.spyOn(functions, 'test_prime')
        spy();
        expect(spy).toHaveReturned();
    })

    // toHaveBeenCalled
    test("if function is being called", () => {
        const spy = jest.spyOn(functions, 'test_prime')
        spy();
        expect(spy).toHaveBeenCalled()
    })
});