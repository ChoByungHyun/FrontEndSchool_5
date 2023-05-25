import {
  sum,
  substract,
  multiply,
  divide,
} from "../myFunctions/do-some-functions";
describe("Math functions test", () => {
  it("두가지 값을 더합니다.", () => {
    expect(sum(2, 2)).toBe(4);
  });
  it("두가지 값을 뺍니다.", () => {
    expect(substract(2, 2)).toBe(0);
  });
  it("두가지 값을 곱합니다.", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("두가지 값을 나눔합니다.", () => {
    expect(divide(2, 2)).toBe(1);
  });
});
