import * as dotenv from "dotenv";
import { MCPServer } from "mcp-framework";
dotenv.config();

const PORT = Number(process.env.PORT);

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: PORT
    }
  }});

server.start();