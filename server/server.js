const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/convert", (req, res) => {
  const { value, from, to, type } = req.body;
  let result;

  if (type === "length") {
    const units = {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      mile: 1609.34,
      yard: 0.9144,
      foot: 0.3048,
      inch: 0.0254,
    };

    result = (value * units[from]) / units[to];
  }

  if (type === "weight") {
    const units = {
      kilogram: 1,
      gram: 0.001,
      milligram: 0.000001,
      pound: 0.453592,
      ounce: 0.0283495,
    };

    result = (value * units[from]) / units[to];
  }

  if (type === "temperature") {
    if (from === "Celsius" && to === "Fahrenheit")
      result = (value * 9) / 5 + 32;
    else if (from === "Fahrenheit" && to === "Celsius")
      result = ((value - 32) * 5) / 9;
    else if (from === "Celsius" && to === "Kelvin")
      result = value + 273.15;
    else if (from === "Kelvin" && to === "Celsius")
      result = value - 273.15;
    else result = value;
  }

  res.json({ result });
});

app.listen(5000, () => console.log("Server running on 5000"));