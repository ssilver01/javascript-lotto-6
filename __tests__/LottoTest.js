import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개 미만이면 예외가 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("유효한 로또 번호로 가능", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 번호에 숫자가 아닌 값이 포함되면 예외가 발생", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });
});
