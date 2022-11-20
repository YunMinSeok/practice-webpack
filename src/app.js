import form from "./form";
import result from "./result";
import "./app.css";

document.addEventListener("DOMContentLoader", async () => {
  const formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  const resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});
