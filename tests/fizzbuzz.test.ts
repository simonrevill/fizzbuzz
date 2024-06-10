import fizzBuzz from "../src/fizzbuzz";

describe("fizzbuzz tests", () => {
  it("accepts a number as input and returns it as a string", () => {
    const result = fizzBuzz(1);

    expect(result).toBe("1");
  });

  it('returns string "Fizz" for multiples of three', () => {
    const result = fizzBuzz(3);

    expect(result).toBe("Fizz");
  });

  it('returns string "Buzz" for multiples of five', () => {
    const result = fizzBuzz(5);

    expect(result).toBe("Buzz");
  });

  it('returns string "FizzBuzz" for number that is multiple of three and five', () => {
    const result = fizzBuzz(15);

    expect(result).toBe("FizzBuzz");
  });
});
