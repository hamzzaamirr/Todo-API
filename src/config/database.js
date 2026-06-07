import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("database is connected");
  } catch (error) {
    console.error(`database is failed to connect: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
