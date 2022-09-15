import * as dotenv from "dotenv";
dotenv.config();

interface IConfig {
  name: any;
  nodeEnv: any;
  port: any;
  jsdocOptions: any;
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
  jsdocOptions: {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Docs",
        version: "1.0",
        description:
          "This is a CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: process.env.APP_NAME,
          url: process.env.APP_URL,
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: `http://localhost:${process.env.APP_PORT}/api/v1`,
        },
      ],
    },
    apis: ["./src/components/**/routes.ts"],
  },
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
