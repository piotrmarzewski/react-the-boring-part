function pokemon(text) {
  return text.toLowerCase()
    .split("")
    .map((char, i) => i % 2 ? char.toUpperCase() : char )
    .join("");
};

export default pokemon;
