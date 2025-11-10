import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About Me</h1><p>My name is Maria. I am a university student</p>"
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contatct Me</h1><p>+881778326029</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
