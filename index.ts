/**
 * Hyper Model Provider for Pi
 *
 * Provider: https://hyper.charm.land
 * API: OpenAI Chat Completions compatible
 *
 * Pricing: Hyper uses Hypercredits (1 credit ≈ 5¢).
 * Set cost to 0 so Pi tracks usage without showing inaccurate dollar amounts.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function(pi: ExtensionAPI) {
  const zeroCost = { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 };

  const hyperModels = [
    {
      id: "deepseek-v4-flash",
      name: "DeepSeek V4 Flash",
      contextWindow: 1048576,
      maxTokens: 104857,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "deepseek-v4-pro",
      name: "DeepSeek V4 Pro",
      contextWindow: 1048576,
      maxTokens: 104857,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "gemma-4-26b-a4b-it",
      name: "Gemma 4 26B A4B",
      contextWindow: 32768,
      maxTokens: 3276,
      reasoning: true,
      input: ["text"],
      cost: zeroCost,
    },
    {
      id: "glm-5",
      name: "GLM-5",
      contextWindow: 202752,
      maxTokens: 20275,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "glm-5.1",
      name: "GLM-5.1",
      contextWindow: 202752,
      maxTokens: 20275,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "gpt-oss-120b",
      name: "GPT-OSS-120B",
      contextWindow: 131072,
      maxTokens: 13107,
      reasoning: true,
      input: ["text"],
      cost: zeroCost,
      thinkingLevelMap: {
        minimal: null,
        low: "low",
        medium: "medium",
        high: "high",
        xhigh: "high",
      },
      compat: {
        supportsReasoningEffort: true,
      },
    },
    {
      id: "kimi-k2.5",
      name: "Kimi K2.5",
      contextWindow: 262144,
      maxTokens: 26214,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "kimi-k2.6",
      name: "Kimi K2.6",
      contextWindow: 32768,
      maxTokens: 3276,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "llama-3.3-70b-instruct",
      name: "Llama 3.3 70B Instruct",
      contextWindow: 128000,
      maxTokens: 12800,
      reasoning: true,
      input: ["text"],
      cost: zeroCost,
    },
    {
      id: "llama-4-maverick-17b-128e-instruct-fp8",
      name: "Llama 4 Maverick 17B 128E",
      contextWindow: 430000,
      maxTokens: 43000,
      reasoning: true,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "mistral-large-instruct-2411",
      name: "Mistral Large Instruct 2411",
      contextWindow: 128000,
      maxTokens: 12800,
      reasoning: false,
      input: ["text", "image"],
      cost: zeroCost,
    },
    {
      id: "qwen3-coder-480b-a35b-instruct-int4-mixed-ar",
      name: "Qwen3 Coder 480B INT4",
      contextWindow: 106000,
      maxTokens: 10600,
      reasoning: false,
      input: ["text"],
      cost: zeroCost,
    },
    {
      id: "qwen3-next-80b-a3b-instruct",
      name: "Qwen3 Next 80B A3B",
      contextWindow: 262144,
      maxTokens: 26214,
      reasoning: false,
      input: ["text"],
      cost: zeroCost,
    },
  ];

  pi.registerProvider("charm-hyper", {
    name: "Charm Hyper",
    baseUrl: "https://hyper.charm.land/v1",
    apiKey: "HYPER_API_KEY",
    authHeader: true,
    api: "openai-completions",
    models: hyperModels,
  });

}
