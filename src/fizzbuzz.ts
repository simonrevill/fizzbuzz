export default function fizzBuzz(number: number) {
  if (number === 0) {
    return number.toString();
  }

  if (number % 3 === 0) {
    return "Fizz";
  }
}
