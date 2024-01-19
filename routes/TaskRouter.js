// The router file can be viewed in the same way as a use-case in Android

import express from "express";
import {
  addTodayTask,
  addWorkTask,
  showAllTodayTask,
  showAllWorkTask,
} from "../controllers/TaskController.js";

let router = express.Router();

router.get("/", showAllTodayTask);

router.get("/work", showAllWorkTask);

router.post("/todaySubmit", addTodayTask);

router.post("/workSubmit", addWorkTask);

export default router;
