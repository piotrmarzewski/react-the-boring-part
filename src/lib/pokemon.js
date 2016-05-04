import "../style.css";

function pokemon(text) {
  return text.toLowerCase()
    .split("")
    .map((char, i) => i % 2 ? char.toUpperCase() : char )
    .join("");
};

function foo() {
  return Math.rand();
}

export default pokemon;
