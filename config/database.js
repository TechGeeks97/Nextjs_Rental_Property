import mongoose from "mongoose";
let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // If the databae is already connected dont connect again
  if (connected) {
    console.log("Mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("mongodb connected ....");
    connected = true;
  } catch (error) {
    console.log("error", error);
  }
};
export default connectDB;
