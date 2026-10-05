import assert from "node:assert/strict";
import { test } from "node:test";
import { readOptions } from "../src/settings.ts";

test("missing or malformed settings use standalone defaults", () => {
  for (const settings of [undefined, null, false, 42, "x", [], {},
    { lungo: null }, { lungo: [] }, { lungo: "x" },
    { expresso: { footer: false, nerdFonts: true } }]) {
    assert.deepEqual(readOptions(settings), { footer: true, nerdFonts: false });
  }
});

test("Nerd Fonts require an explicit boolean", () => {
  for (const nerdFonts of [true, false, "true", 1, null, undefined, [], {}]) {
    assert.equal(readOptions({ lungo: { nerdFonts } }).nerdFonts, nerdFonts === true);
  }
});
