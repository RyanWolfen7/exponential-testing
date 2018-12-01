console.log("### EXPECT TESTS ###")
console.log("--------------------")
console.log("Expects 1 to equal 1")
expect(1).toEqual(1)

console.log("Expects to fail, because 1 does not equal 2")
expect(1).toEqual(2)

console.log("Expects 'hello' to equal 'hello'")
expect('hello').toEqual('hello')

console.log("Expects to fail, because 'Hello' to not equal 'hello'")
expect('Hello').toEqual('hello')

console.log("### COMPARE ARRAY TESTS ###")
console.log("---------------------------")
console.log("Compare Array pass, because arrays match")
let arrayOne = [ 1, 2, 3, 4, 5, 6];
let arrayTwo = [ 1, 2, 3, 4, 5, 6];
expect(arrayOne).compareArray(arrayTwo)

console.log("Expects to fail, because arrays do not match")
arrayOne = [ 1, 2, 3, 4, 5, 6];
arrayTwo = [ 1, 2, 3, 4, 6, 5];
expect(arrayOne).compareArray(arrayTwo)

console.log("Expects to fail, because arrays are not the same length")
arrayOne = [ 1, 2, 3, 4, 5, 6];
arrayTwo = [ 1, 2, 3];
expect(arrayOne).compareArray(arrayTwo)

console.log("Compare Array with strings pass, because arrays match")
arrayOne = [ 'this', 'is', 'an', 'array'];
arrayTwo = [ 'this', 'is', 'an', 'array'];
expect(arrayOne).compareArray(arrayTwo)

console.log("Expects to fail, because string arrays do not match")
arrayOne = ['this', 'is', 'an', 'array'];
arrayTwo = [ 'this', 'is', 'AN', 'ARRAY'];
expect(arrayOne).compareArray(arrayTwo)

console.log("Expects to fail, because string arrays not the same length")
arrayOne = ['this', 'is', 'an', 'array'];
arrayTwo = [ 'Fail', 'PLease'];
expect(arrayOne).compareArray(arrayTwo)

console.log("### To HAVE CONTENT TESTS ###")
console.log("-----------------------------")
console.log(" Passes, because arg string is in array")
arrayOne = [ 'this', 'is', 'an', 'array'];
let arg = 'an'
expect(arrayOne).toHaveContent(arg)

console.log(" Fails, because arg string is not in array")
arrayOne = [ 'this', 'is', 'an', 'array'];
arg = 'boy'
expect(arrayOne).toHaveContent(arg)

console.log(" Passes, because arg int is in array")
arrayOne = [ 1, 2, 3, 4];
arg = 1
expect(arrayOne).toHaveContent(arg)

console.log(" Fails, because arg int is not in array")
arrayOne = [ 1, 2, 3, 4];
arg = 9
expect(arrayOne).toHaveContent(arg)

console.log("### To NOT HAVE CONTENT TESTS ###")
console.log("-----------------------------")
console.log(" Fails, because arg string is in array")
arrayOne = [ 'this', 'is', 'an', 'array'];
arg = 'an'
expect(arrayOne).toNotHaveContent(arg)

console.log(" Passes, because arg string is not in array")
arrayOne = [ 'this', 'is', 'an', 'array'];
arg = 'boy'
expect(arrayOne).toNotHaveContent(arg)

console.log(" Fails, because arg int is in array")
arrayOne = [ 1, 2, 3, 4];
arg = 1
expect(arrayOne).toNotHaveContent(arg)

console.log(" Passes, because arg int is not in array")
arrayOne = [ 1, 2, 3, 4];
arg = 9
expect(arrayOne).toNotHaveContent(arg)
