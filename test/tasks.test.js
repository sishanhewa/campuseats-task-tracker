const test = require("node:test");
const assert = require("node:assert/strict");

const { calculateTotal, tasks } = require("../src/tasks");

test("stores three initial CampusEats tasks", () => {
  assert.equal(tasks.length, 3);
});

test("applies the VIP discount", () => {
  assert.equal(calculateTotal(100, 2, "vip"), 180);
});

test("keeps the standard total unchanged", () => {
  assert.equal(calculateTotal(100, 2, "standard"), 200);
});

test("rejects negative price or quantity", () => {
  assert.throws(() => calculateTotal(-1, 2, "standard"), RangeError);
});

test("rejects non-numeric inputs", () => {
  assert.throws(() => calculateTotal("100", 2, "vip"), TypeError);
});
