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
    "accepts a number as input and returns it as a string - %i",
    (number, expected) => {
      const result = fizzBuzz(number);

      expect(result).toBe(expected);
    }
  );

  it.each([[3], [6], [9], [12]])(
    'returns string "Fizz" for multiples of three - %i',
    (number) => {
      const result = fizzBuzz(number);

      expect(result).toBe("Fizz");
    }
  );

  it.each([[5], [10], [20], [25]])(
    'returns string "Buzz" for multiples of five - %i',
    (number) => {
      const result = fizzBuzz(number);

      expect(result).toBe("Buzz");
    }
  );

  it.each([[15], [30], [45], [90]])(
    'returns string "FizzBuzz" for number that is multiple of three and five - %i',
    (number) => {
      const result = fizzBuzz(number);

      expect(result).toBe("FizzBuzz");
    }
  );
});
