import fizzBuzz from "../src/fizzbuzz";

describe("fizzbuzz tests", () => {
  it("accepts a number as input and returns it as a string", () => {
    const result = fizzBuzz(0);

    expect(result).toBe("0");
  });

  it('returns string "Fizz" for multiples of three', () => {
    const result = fizzBuzz(3);

    expect(result).toBe("Fizz");
  });
});
