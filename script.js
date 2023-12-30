function minCost(arr) {
  let totalCost = 0;
  arr = arr.sort((a, b) => a - b); // Sort in ascending order for optimal cost

  while (arr.length > 1) {
    const currentCost = arr[0] + arr[1];
    totalCost += currentCost;
    arr.splice(0, 2, currentCost); // Combine two smallest ropes and insert new length
  }

  return totalCost;
}

function calculateMinCost() {
  const ropeLengthsString = document.getElementById("rope-lengths").value;
  const ropeLengthsArray = ropeLengthsString.split(" ").map(Number);
  const minCost = minCost(ropeLengthsArray);
  document.getElementById("result").textContent = `Minimum cost: ${minCost}`;
}
