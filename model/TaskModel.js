// The model file can be viewed in the same way as a data model in Android

import mongoose from "mongoose";

const todaySchema = mongoose.Schema({
  task: String,
});

const workSchema = mongoose.Schema({
  task: String,
});

export const Today = mongoose.model("Today", todaySchema);
export const Work = mongoose.model("Work", workSchema);
