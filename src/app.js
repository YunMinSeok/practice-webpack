import "./app.css";
import nyancat from "./nyancat.jpeg";

document.addEventListener("DOMContentLoader", () => {
  document.innerHTML = `<img src= "${nyancat}" />`;
});
