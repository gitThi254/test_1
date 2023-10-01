import mongoose, { models } from "mongoose";

const testSchema = new mongoose.Schema({
  text: String,
});

const Test = models.Test || mongoose.model("Test", testSchema);
export default Test;
