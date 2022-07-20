import { ConnectOptions, connect } from "mongoose";
import config from "@config/env";
import logger from "@utils/logger";

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
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export default ConnectDB;
