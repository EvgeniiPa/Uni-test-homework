import { healthLine } from '../js/app.js';

test('healthLine test full', () => {
  const list = { name: 'Маг', health: 90 };
  const result = healthLine(list);

  expect(result).toBe('healthy');
});

test('healthLine test wounded', () => {
  const list = { name: 'Маг', health: 49 };
  const result = healthLine(list);

  expect(result).toBe('wounded');
});

test('healthLine test critical', () => {
  const list = { name: 'Маг', health: 14 };
  const result = healthLine(list);

  expect(result).toBe('critical');
});
