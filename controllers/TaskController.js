// The controller file can be viewed in the same way as a repository in Android

import { Today, Work } from "../model/TaskModel.js";

export const addTodayTask = async (req, res) => {
  const todayTask = new Today(req.body);
  try {
    await todayTask.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addWorkTask = async (req, res) => {
  const workTask = new Work(req.body);
  try {
    await workTask.save();
    res.redirect("/work");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const showAllTodayTask = async (req, res) => {
  try {
    const todayTasks = await Today.find();
    res.render("index.ejs", { todayTaskList: todayTasks });
  } catch (error) {
    console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const showAllWorkTask = async (req, res) => {
  try {
    const workTasks = await Work.find();
    res.render("work.ejs", { workList: workTasks });
  } catch (error) {
    console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};
