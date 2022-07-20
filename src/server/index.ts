import * as http from "http";
import server from "./server";
import * as serverHandlers from "./handler";
import logger from "@utils/logger";

const Server: http.Server = http.createServer(server);
Server.listen(server.get("port"));

Server.on("error", (error: Error) => {
  serverHandlers.onError(error, server.get("port"));
});

Server.on("listening", () => {
  logger.debug("Listening on port : " + server.get("port"));
});
