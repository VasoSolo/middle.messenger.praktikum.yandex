// // import "./style.css";

// // document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
// //   <div>
// //     Hello
// //   </div>
// // `;
// import express from 'express';
// import path from 'path';
// const app = express();
// // const path = require("path");

// app.use(express.static("static"));

// app.get("/", (res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
// });

const express = require('express');
// import express from 'express';

const path = require('path');

const app = express()
const PORT = 3000

app.use(express.static('./dist'))

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



app.listen(PORT, function () {
  console.log(`express app listening on post ${PORT}`);
})
