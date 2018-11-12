const Expect = require("../lib/Expect")

console.log("Expects 1 to equal 1")
new Expect(1).toEqual(1)

console.log("Expects 1 to not equal 2")
new Expect(1).toEqual(2)

// console.log("Expects var 1 to equal var 2")
// var a = [1,2,3]
// var b = [1,2,3]
// new Expect(a.value).toEqual(b.value)
// fix this later

// console.log("Expects var 1 to not equal var 2")
// var a = [1,2,3]
// var b = [1,2,4]
// new Expect(a.value).toEqual(b.value)

console.log("Expects 'hello' to equal 'hello'")
new Expect('hello').toEqual('hello')

console.log("Expects 'hello' to not equal 'hello'")
new Expect('Hello').toEqual('hello')
