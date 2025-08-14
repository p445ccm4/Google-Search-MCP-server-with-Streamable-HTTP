import { MCPTool } from "mcp-framework";
import { z } from "zod";
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY!;
const SEARCH_ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID!;

interface SearchInput {
  query: string;
  num: number;
}

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

const axiosInstance = axios.create({
      baseURL: 'https://www.googleapis.com/customsearch/v1',
      params: {
        key: API_KEY,
        cx: SEARCH_ENGINE_ID,
      },
    });

class SearchTool extends MCPTool<SearchInput> {
  name = "Google Search";
  description = "Perform a web search query";

  schema = {
    query: {
      type: z.string(),
      description: "Search query",
    },
    num: {
      type: z.number().max(10).min(1),
      description: 'Number of results (1-10)'
    }
  };

  async execute(input: SearchInput) {
    console.log(`Searching top ${input.num} results for query: ${input.query}`);

      try {
        const response = await axiosInstance.get('', {
          params: input
        });

        const results: SearchResult[] = response.data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
        }));

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(results, null, 2),
            },
          ],
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return {
            content: [
              {
                type: 'text',
                text: `Search API error: ${
                  error.response?.data?.error?.message ?? error.message
                }`,
              },
            ],
            isError: true,
          };
        }
        throw error;
      }

  }
}

export default SearchTool;