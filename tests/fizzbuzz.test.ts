import fizzBuzz from "../src/fizzbuzz";

describe("fizzbuzz tests", () => {
  it.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
    [7, "7"],
  ])(
    "accepts a number as input and returns it as a string",
    (number, expected) => {
      const result = fizzBuzz(number);

      expect(result).toBe(expected);
    }
  );

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
