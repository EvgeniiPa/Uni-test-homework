export function healthLine(item) {
  if (item.health >= 50) {
    return "healthy";
  }
  if (item.health < 50 && item.health >= 15) {
    return "wounded";
  }

  return "critical";
}

export function usersSorted(users) {
  return users.sort((a, b) => b.health - a.health);
}

//тест
