 import test from "node:test";
import assert from "node:assert/strict";
import { getHealth } from "../src/health.js";

test("API health should return status ok", () => {
  const result = getHealth();

  assert.equal(result.status, "ok");
  assert.equal(result.service, "helpdesk-api");
});