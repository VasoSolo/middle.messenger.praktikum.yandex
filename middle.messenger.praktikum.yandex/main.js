// import "./style.css";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     Hello
//   </div>
// `;
import express from 'express';
import path from 'path';
const app = express();
// const path = require("path");

app.use(express.static("static"));

app.get("/", (res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
