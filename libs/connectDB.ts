import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("connected readystate");
  } else {
    mongoose
      .connect(process.env.MONGOURI!)
      .then(() => {
        console.log("db connected");
      })
      .catch((error) => {
        console.log("db disconnected " + error);
      });
  }
};

export default connectDB;
