const count = require("./count-characters-in-your-string");

describe("Testing count", () => {
  it("Should be able to count the strings", () => {
    expect(count("aba")).toStrictEqual({ a: 2, b: 1 });
  });
});
