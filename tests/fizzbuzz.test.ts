import fizzBuzz from "../src/fizzbuzz";

describe("fizzbuzz tests", () => {
  it("accepts a number as input and returns it as a string", () => {
    const result = fizzBuzz(0);

    expect(result).toBe("0");
  });
});
