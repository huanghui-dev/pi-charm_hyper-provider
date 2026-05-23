import { test } from "node:test";
import assert from "node:assert";
import { default as registerProvider } from "../index.js";

test("Charm Hyper Provider Registration and Models Metadata", () => {
  let registeredName: string | null = null;
  let registeredConfig: any = null;

  const mockPi = {
    registerProvider: (name: string, config: any) => {
      registeredName = name;
      registeredConfig = config;
    },
  } as any;

  // Execute registration
  registerProvider(mockPi);

  // 1. Assert Provider configuration is correctly mapped
  assert.strictEqual(registeredName, "charm-hyper");
  assert.ok(registeredConfig);
  assert.strictEqual(registeredConfig.name, "Charm Hyper");
  assert.strictEqual(registeredConfig.baseUrl, "https://hyper.charm.land/v1");
  assert.strictEqual(registeredConfig.apiKey, "HYPER_API_KEY");
  assert.strictEqual(registeredConfig.authHeader, true);
  assert.strictEqual(registeredConfig.api, "openai-completions");

  // 2. Assert Models details are accurate
  const models = registeredConfig.models;
  assert.ok(Array.isArray(models));
  
  // Find DeepSeek V4 Pro
  const dsPro = models.find((m: any) => m.id === "deepseek-v4-pro");
  assert.ok(dsPro);
  assert.strictEqual(dsPro.name, "DeepSeek V4 Pro");
  assert.strictEqual(dsPro.contextWindow, 1048576);
  assert.strictEqual(dsPro.reasoning, true);
  assert.deepStrictEqual(dsPro.input, ["text", "image"]);
  assert.deepStrictEqual(dsPro.cost, { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 });

  // Find Llama 3.3 70B Instruct
  const llama70b = models.find((m: any) => m.id === "llama-3.3-70b-instruct");
  assert.ok(llama70b);
  assert.strictEqual(llama70b.contextWindow, 128000);
  assert.deepStrictEqual(llama70b.input, ["text"]);
});
