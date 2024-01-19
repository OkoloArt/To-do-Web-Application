// The index file can be viewed in the same way as the viewModel in Android

import express from "express";
import mongoose from "mongoose";
import taskRoute from "./routes/TaskRouter.js";

mongoose.connect("mongodb://localhost:27017/todoDb");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(taskRoute);
app.use("/work", taskRoute);

app.listen(port, () => {
  console.log(`Server Listening Port is: ${port}`);
});
