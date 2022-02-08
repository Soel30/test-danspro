import { ConnectOptions, connect } from "mongoose";
import config from "./config";

type ConnectionOptionsExtend = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};

const ConnectDB = async () => {
  try {
    const mongoURI: string = config.database.connectionString;
    const options: ConnectOptions & ConnectionOptionsExtend =
      config.database.options;
    await connect(mongoURI, options);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
