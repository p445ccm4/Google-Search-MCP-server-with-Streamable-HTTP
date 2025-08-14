import { MCPServer } from "mcp-framework";

const PORT = Number(process.env.PORT) || 3020;

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: PORT
    }
  }});

server.start();