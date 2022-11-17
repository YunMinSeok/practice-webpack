import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  document.body.innterHTML = (res.data || [])
    // eslint-disable-next-line prettier/prettier
    .map((user) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("");
});
