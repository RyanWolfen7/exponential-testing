function Expect(value) {
  this.value = value;
}

Expect.prototype.toEqual = function(assertion) {
  return this.value === assertion
}
