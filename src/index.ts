import "./style.css";
import { pokemon } from "./lib/pokemon";

document.querySelector("#root").textContent = pokemon("Hello World!");
