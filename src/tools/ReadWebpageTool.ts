import { MCPTool } from "mcp-framework";
import { z } from "zod";
import axios from 'axios';
import * as cheerio from 'cheerio';

interface ReadWebpageInput {
  url: string;
}

interface ReadWebpageResult {
  title: string;
  text: string;
  url: string;
}

class ReadWebpageTool extends MCPTool<ReadWebpageInput> {
  name = "Read Webpage";
  description = "Fetch and extract text content from a webpage";

  schema = {
    url: {
      type: z.string(),
      description: "URL of the webpage to read",
    }
  };

  async execute(input: ReadWebpageInput) {
    console.log(`Reading webpage: ${input.url}`);

      try {
        const response = await axios.get(input.url);
        const $ = cheerio.load(response.data);

        // Remove script and style elements
        $('script, style').remove();

        const content: ReadWebpageResult = {
          title: $('title').text().trim(),
          text: $('body').text().trim().replace(/\s+/g, ' '),
          url: input.url,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(content, null, 2),
            },
          ],
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return {
            content: [
              {
                type: 'text',
                text: `Webpage fetch error: ${error.message}`,
              },
            ],
            isError: true,
          };
        }
        throw error;
      }

  }
}

export default ReadWebpageTool;