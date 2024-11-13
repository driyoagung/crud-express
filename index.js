const express = require("express");
const app = express();

// app.use(() => {
//   console.log("terdapat request, menunggu response");
// });

app.get("/", (req, res) => {
  res.send("Halaman Homepage telah diubah ya ges alhamdulillah");
});

app.get("/about", (req, res) => {
  res.send("About Page is here!");
});

app.get("/blog/:judul/:author", (req, res) => {
  const { judul, author } = req.params;
  res.send(
    `<h1>ini halaman blog dengan judul: ${judul} dan dengan Authornya adalah ${author}  </h1> `
  );
});

// Query String in Express JS
app.get("/contact/:name/:email", (req, res) => {
  const { name, email } = req.params;
  res.send(`Name: ${name}, Email: ${email}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.send("Search term is empty");
  }
  res.send(`Searching for ${q}`);
});

app.get("/service", (req, res) => {
  res.send("Service Page is here!");
});
app.post("/service", (req, res) => {
  res.send("Service Post is load!");
});

app.get("/tes", (req, res) => {
  console.log("terdapat request, menunggu response");
  res.send({
    message: "Hello World!",
  });
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
