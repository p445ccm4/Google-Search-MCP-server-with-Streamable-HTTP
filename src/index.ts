import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: 3020
    }
  }});

server.start();