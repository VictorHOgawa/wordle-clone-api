import { test } from "node:test";
import assert from "node:assert/strict";
import { scoringFunction } from "../scoring.ts";

test("The function only accepts strings", () => {
  assert.strictEqual(scoringFunction(null), "Please include a valid word.")
  assert.strictEqual(scoringFunction(12345), "Please include a valid word.")
  assert.strictEqual(scoringFunction(), "Please include a valid word.")
})

test("The function doesn't allow spaces", () => {
  assert.strictEqual(scoringFunction(" brim"), "No spaces allowed.")
})

test("The function only accepts 5-letter words", () => {
  assert.strictEqual(scoringFunction("breaks"), "Only 5 letter words are allowed.")
})

test("The word is valid", () => {
  assert.strictEqual(scoringFunction("abaab"), `Valid`)
})

test("The function matches if the guess is correct", () => {
  assert.strictEqual(scoringFunction("bbbbb"), "You guessed the correct word!")
})

// import assert from 'assert/strict';
// import test from 'node:test';

// test('1 is equal to 1.', () => {
//   assert.strictEqual(1, 1);
// });
