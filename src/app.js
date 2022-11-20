import form from "./form";
import "./app.css";

document.addEventListener("DOMContentLoader", async () => {
  const formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  import(/* webpackChunkName: "result" */ "./result.js").then(async (m) => {
    const result = m.default;
    const resultEl = document.createElement("div");
    resultEl.innerHTML = await result.render();
    document.body.appendChild(resultEl);
  });
});
