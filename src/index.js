import cls from "./style.css";
import pokemon from "./lib/pokemon";

const $root = document.querySelector("#root");
$root.classList.add(cls.purple);
$root.textContent = pokemon("Hello World!");
