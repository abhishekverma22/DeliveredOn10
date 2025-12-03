import mongoose from "mongoose";


if (process.env.MONGODB_URI) {
  throw new Error("Please Provide MONGIDB_URI in the .env file");
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Data base connected");
  } catch (error) {
    console.log("Something went wrong while connecting ", error);
    process.exit(1);
  }
};

export default connectDB;
