import * as http from "http";
import server from "./server";
import * as serverHandlers from "./handler";
import logger from "@utils/logger";
import sequelize from "@config/database";

const Server: http.Server = http.createServer(server);
Server.listen(server.get("port"));

Server.on("error", (error: Error) => {
  serverHandlers.onError(error, server.get("port"));
});

Server.on("listening", async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  logger.debug("Listening on port : " + server.get("port"));
});

