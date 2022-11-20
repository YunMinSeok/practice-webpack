import form from "./form";
import result from "./result";
import "./app.css";

let resultEl;
let formEl;

document.addEventListener("DOMContentLoader", async () => {
  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});
