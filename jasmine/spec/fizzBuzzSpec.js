describe("FizzBuzz", function() {

  it("knows when something is divisible by 3", function() {
    var fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.divisibleBy3(3)).toEqual(true);
  });

});
