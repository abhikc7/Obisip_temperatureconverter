function convertTemperature() {
    var temp = parseFloat(document.getElementById("inputTemp").value);
    var unit = document.querySelector('input[name="unit"]:checked').value;
    var result;

    if (unit === "celsius") {
      result = (temp * 9 / 5) + 32;
      result = result.toFixed(2) + "°F";
    } else {
      result = (temp - 32) * 5 / 9;
      result = result.toFixed(2) + "°C";
    }

    document.getElementById("result").textContent = "Result: " + result;
  }
