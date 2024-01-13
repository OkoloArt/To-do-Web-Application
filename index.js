import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const todayTodo = [];
const workTodo = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { todayTaskList: todayTodo });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { workList: workTodo });
});

app.post("/todaySubmit", (req, res) => {
  todayTodo.push(req.body["task"]);
  res.redirect("/");
});

app.post("/workSubmit", (req, res) => {
  workTodo.push(req.body["task"]);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Server Listening Port Is: ${port}`);
});
