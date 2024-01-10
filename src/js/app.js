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
  users.sort((a, b) => {
    if (a.health > b.health) {
      return 1;
    }
    return 0;
  });
}
