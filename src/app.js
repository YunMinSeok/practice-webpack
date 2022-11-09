import "./app.css";
import nyancat from "./nyancat.jpg";

document.addEventListener("DOMContentLoader", () => {
  document.body.innerHTML = `<img src="${nyancat}" />`;
});

console.log(process.env.NODE_ENV);
console.log(api.domain);
