function healthLine(item) {
  if (item.health >= 50) {
    return "healthy";
  } else if (item.health < 50 && item.health >= 15) {
    return "wounded";
  } else if (item.health < 15) {
    return "critical";
  }
}

export default healthLine;