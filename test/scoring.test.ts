import { test } from "node:test";
import assert from "node:assert/strict";
import { scoringFunction } from "../scoring.ts";

//⬜🟨🟩

test("The function should return ⬜🟩🟩🟨🟩", () => {
  assert.strictEqual(scoringFunction("trace", "crane"), "⬜🟩🟩🟨🟩");
});

test("The function should return 🟨⬜🟩⬜🟩", () => {
  assert.strictEqual(scoringFunction("bobby", "abbey"), "🟨⬜🟩⬜🟩");
});

test("The function should return ⬜⬜🟨⬜🟩", () => {
  assert.strictEqual(scoringFunction("eerie", "crane"), "⬜⬜🟨⬜🟩");
});

test("The function should return ⬜⬜🟨⬜⬜", () => {
  assert.strictEqual(scoringFunction("burns", "treat"), "⬜⬜🟨⬜⬜");
});
