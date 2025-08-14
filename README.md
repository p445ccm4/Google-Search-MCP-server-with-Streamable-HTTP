# google-search-mcp-server-with-Streamable-HTTP

A Model Context Protocol (MCP) HTTP server built with the `mcp-framework` that allows a model to use Google Search.

-----

## ⚙️ Prerequisites & Setup

Before launching the server, you must get Google API credentials and configure your local environment.

### 1\. Get Google API Credentials

This tool requires a **Google Custom Search API Key** and a **Search Engine ID**.

1.  **Get the API Key:**

      * Go to the [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
      * Navigate to the **API Library** and enable the **Custom Search API**.
      * Go to the **Credentials** page, click **+ CREATE CREDENTIALS**, and select **API key**. Copy the generated key.

2.  **Get the Search Engine ID:**

      * Go to the [Programmable Search Engine](https://programmablesearchengine.google.com/) control panel.
      * Click **Add** to create a new search engine. You can configure it to search the entire web.
      * After creation, go to the **Setup** page and copy the **Search engine ID**.

### 2\. Configure Environment Variables

You'll store your secret credentials in a local `.env` file.

1.  Make a copy of the example environment file. This command works for macOS and Linux.

    ```bash
    cp .env.example .env
    ```

    *(For Windows Command Prompt, use `copy .env.example .env`)*

2.  Open the new `.env` file and paste the credentials you just obtained. It should look like this:

    ```env
    # .env
    API_KEY="YOUR_API_KEY_HERE"
    SEARCH_ENGINE_ID="YOUR_SEARCH_ENGINE_ID_HERE"
    PORT=3020
    ```

-----

## 🚀 Quick Start

Once your `.env` file is configured, you can start the server.

```bash
# Install dependencies
npm install

# Build the project (compiles TypeScript to JavaScript)
npm run build

# Start the server
npm run start
```

-----

## 📁 Project Structure

The `.env` file you created will be located in the root of the project.

```
google-search-mcp-server/
├── .env                  # Your local environment variables (created from .env.example)
├── .env.example          # Example environment file
├── src/
│   ├── tools/            # MCP Tools
│   │   └── ReadWebpageTool.ts
│   │   └── SearchTool.ts
│   └── index.ts          # Server entry point
├── package.json
└── tsconfig.json
```

-----

## 🖥️ Using with Claude Desktop

### Local Development

To connect this server to your Claude Desktop app, add the following configuration to your config file.

  * **MacOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  * **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

<!-- end list -->

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

**Note:** Remember to replace `/absolute/path/to/` with the actual full path to your project directory.

-----

## 🛠️ Building and Testing

1.  Make changes to your tools in the `src/tools/` directory.
2.  Run `npm run build` to compile your changes.
3.  Restart the server (`npm run start`) to load your updated tools.

-----

## 📚 Learn More

  * [MCP Framework Github](https://github.com/QuantGeekDev/mcp-framework)
  * [MCP Framework Docs](https://mcp-framework.com)