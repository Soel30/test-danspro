import * as dotenv from "dotenv";
dotenv.config();

interface IConfig {
  name: any;
  nodeEnv: any;
  port: any;
  baseUrl: any;
  database: {
    connectionString: any;
    options: {
      useNewUrlParser: boolean;
      useUnifiedTopology: boolean;
    };
  };
  authentication: {
    jwtSecret: any;
  };
}

const NODE_ENV = process.env.NODE_ENV || "development";
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "";
const ConfigData: IConfig = {
  name: process.env.APP_NAME,
  nodeEnv: NODE_ENV,
  port: process.env.APP_PORT,
  baseUrl: process.env.APP_URL,
  database: {
    connectionString: DB_CONNECTION_STRING,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET,
  },
};

export default ConfigData;