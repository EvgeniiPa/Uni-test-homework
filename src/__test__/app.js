import { healthLine } from "./js/app";

test("healthLine test", () => {
  const list = { name: "Маг", health: 90 };
  const result = healthLine(list);

  expect(result).toBe("healthy");
});
