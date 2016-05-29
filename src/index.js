import cls from "./style.css";
import pokemon from "src/lib/pokemon";

const $root = document.querySelector("#root");
$root.classList.add(cls.purple);
$root.textContent = pokemon("Hello World!");
