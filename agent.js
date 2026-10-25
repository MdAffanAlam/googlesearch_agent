import "dotenv/config";
import { ChatGroq } from "@langchain/groq";
import { AIMessage, createAgent, HumanMessage, tool } from "langchain";
import * as z from "zod";
import readline from "node:readline/promises";
import chalk from "chalk"
import axios from "axios";

const searchGoogle = tool(
  async ({ query }) => {
    const apiKey = process.env.SERPER_API_KEY;

    const response = await axios.post(
      "https://google.serper.dev/search",
      {
        q: query,
        num: 5,
      },
      {
        headers: {
          "X-API-KEY": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    return JSON.stringify(response.data);
  },
  {
    name: "google_search",
    description:
      "Search Google for current information and return relevant web results.",
    schema: z.object({
      query: z.string().describe("The search query"),
    }),
  }
);

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  temperature: 0,
});

const agent = createAgent({
  model,
  tools: [searchGoogle],
  systemPrompt: `You are a Google Search AI agent.
    Use google_search when web research or current information is needed.
    Answer using the retrieved results.
    Include relevant source URLs.
    Never invent search results or sources.
    Explain answers in simple language.`,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const history = [];

try {
  while (true) {
    const query = await rl.question(chalk.bold("\nYou: "));

    if (query.trim().toLowerCase() === "exit") {
      break;
    }

    if (!query.trim()) continue;
    history.push(new HumanMessage(query));

    try {
      const result = await agent.invoke({
        messages: history,
      });
      history.push(new AIMessage(result.messages.at(-1).content));
      console.log(
        chalk.bold("\nAI:"),
        chalk.gray(result.messages.at(-1).content)
      );
    } catch (error) {
      console.error("Error:", error.response?.data ?? error.message);
    }
  }
} finally {
  rl.close();
}
