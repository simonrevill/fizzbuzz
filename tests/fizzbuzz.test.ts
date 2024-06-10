import fizzBuzz from "../src/fizzbuzz";

describe("fizzbuzz tests", () => {
  it('accepts 0 as input and returns the string "0"', () => {
    const result = fizzBuzz(0);

    expect(result).toBe("0");
  });

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

  it.each([
    [3, "Fizz"],
    [6, "Fizz"],
    [9, "Fizz"],
    [12, "Fizz"],
  ])('returns string "Fizz" for multiples of three', (number, expected) => {
    const result = fizzBuzz(number);

    expect(result).toBe(expected);
  });

  it.each([
    [5, "Buzz"],
    [10, "Buzz"],
    [20, "Buzz"],
    [25, "Buzz"],
  ])('returns string "Buzz" for multiples of five', (number, expected) => {
    const result = fizzBuzz(number);

    expect(result).toBe(expected);
  });

  it.each([
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
    [45, "FizzBuzz"],
    [90, "FizzBuzz"],
  ])(
    'returns string "FizzBuzz" for number that is multiple of three and five',
    (number, expected) => {
      const result = fizzBuzz(number);

      expect(result).toBe(expected);
    }
  );
});
