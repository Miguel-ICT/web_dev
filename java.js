function redOrBlack() {
  //Generate a random number between 1 or 0
  const r = Math.random();
  if (r < 0.5) {
    return "black";
  } else {
    return "red";
  }
}
