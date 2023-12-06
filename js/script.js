function calculate() {
  // Get input values
  var sideA = parseFloat(document.getElementById("sideA").value);
  var sideB = parseFloat(document.getElementById("sideB").value);
  var sideC = parseFloat(document.getElementById("sideC").value);

  // Validate input
  if (
    isNaN(sideA) ||
    isNaN(sideB) ||
    isNaN(sideC) ||
    sideA <= 0 ||
    sideB <= 0 ||
    sideC <= 0
  ) {
    alert("Masukkan panjang sisi yang valid.");
    return;
  }

  // Calculate area using Heron's formula
  var s = (sideA + sideB + sideC) / 2;
  var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  // Calculate perimeter
  var perimeter = sideA + sideB + sideC;

  // Display results
  document.getElementById("resultArea").textContent =
    "Luas: " + area.toFixed(2);
  document.getElementById("resultPerimeter").textContent =
    "Keliling: " + perimeter.toFixed(2);
}
