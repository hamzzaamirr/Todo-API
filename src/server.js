import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const connectServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("server is connected");
    });
  } catch (error) {
    console.error(error);
  }
};

connectServer();
