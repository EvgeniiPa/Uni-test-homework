import { healthLine, usersSorted } from "../js/app.js";

test("healthLine test full", () => {
  const list = { name: "Маг", health: 90 };
  const result = healthLine(list);

  expect(result).toBe("healthy");
});

test("healthLine test wounded", () => {
  const list = { name: "Маг", health: 49 };
  const result = healthLine(list);

  expect(result).toBe("wounded");
});

test("healthLine test critical", () => {
  const list = { name: "Маг", health: 14 };
  const result = healthLine(list);

  expect(result).toBe("critical");
});

test("sorted users health", () => {
  const users = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const usersSortedArray = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const result = usersSorted(users);

  expect(result).toEqual(usersSortedArray);
});
