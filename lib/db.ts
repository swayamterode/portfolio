import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState == 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (connectionState == 2) {
    console.log("Connecting...");
    return;
  }
  try {
    await mongoose.connect(MONGO_URI!, {
      dbName: "portfolio",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB db file");
  }
};

export default connect;
