import "./app.css";
import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoader", () => {
  document.body.innerHTML = `<img src= "${nyancat}" />`;
});
