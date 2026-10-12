import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { scoringFunction } from "../scoring.ts";

describe("scoring", () => {
  test("Checks the full scoring logic", () => {
    assert.deepEqual(scoringFunction("trace", "crane"), [
      "absent",
      "correct",
      "correct",
      "present",
      "correct",
    ]);
  });

  test("Checks for deduplication of letters", () => {
    assert.deepEqual(scoringFunction("bobby", "abbey"), [
      "present",
      "absent",
      "correct",
      "absent",
      "correct",
    ]);
  });

  test("Checks for wrong letter winning on a duplicated pair", () => {
    assert.deepEqual(scoringFunction("eerie", "crane"), [
      "absent",
      "absent",
      "present",
      "absent",
      "correct",
    ]);
  });

  test("Checks for handling edge cases with no correct letter", () => {
    assert.deepEqual(scoringFunction("burns", "treat"), [
      "absent",
      "absent",
      "present",
      "absent",
      "absent",
    ]);
  });

  test("Checks for uppercase normalization", () => {
    assert.deepEqual(scoringFunction("FLINg", "quail"), [
      "absent",
      "present",
      "present",
      "absent",
      "absent",
    ]);
  });

  test("Checks for accent normalization", () => {
    assert.deepEqual(scoringFunction("maçãs", "maces"), [
      "correct",
      "correct",
      "correct",
      "absent",
      "correct",
    ]);
  });

  test("Checks for longer words", () => {
    assert.deepEqual(scoringFunction("assist", "savory"), [
      "present",
      "present",
      "absent",
      "absent",
      "absent",
      "absent",
    ]);
  });

  test("Checks for thrown errors", () => {
    assert.throws(
      () => scoringFunction("test", "tests"),
      "The guess is a different size as the answer",
    );
  });
});
