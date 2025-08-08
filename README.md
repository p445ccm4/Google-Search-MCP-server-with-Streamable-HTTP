# google-search-mcp-server

A Model Context Protocol (MCP) server built with mcp-framework.

## Quick Start

```bash
# Install dependencies
npm install

# Build the project
npm run build

```

## Project Structure

```
google-search-mcp-server/
├── src/
│   ├── tools/        # MCP Tools
│   │   └── ReadWebpageTool.ts
│   │   └── SearchTool.ts
│   └── index.ts      # Server entry point
├── package.json
└── tsconfig.json
```

## Using with Claude Desktop

### Local Development

Add this configuration to your Claude Desktop config file:

**MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "google-search-mcp-server": {
      "command": "node",
      "args":["/absolute/path/to/google-search-mcp-server/dist/index.js"]
    }
  }
}
```


## Building and Testing

1. Make changes to your tools
2. Run `npm run build` to compile
3. The server will automatically load your tools on startup

## Learn More

- [MCP Framework Github](https://github.com/QuantGeekDev/mcp-framework)
- [MCP Framework Docs](https://mcp-framework.com)
