import pokemon from "./pokemon";

describe("pokemon", () => {
  it("converts text to pokemon case", () => {
    expect(pokemon("Hello World!")).toEqual("hElLo wOrLd!");
  });
});
