const { add } = require("./script.js");

describe("Properly testing addition", () => {
  test("adding 1 to 3 should return 4", () => {
    expect(add(1,3)).toBe(4);
  })
})