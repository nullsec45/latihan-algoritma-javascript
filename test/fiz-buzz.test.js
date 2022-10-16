import { fizzBuzz } from "../src/fizz-buzz.js";

test("fizz buzz test", () => {
    expect(fizzBuzz(10)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]);
})