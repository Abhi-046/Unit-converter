import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("meter");
  const [to, setTo] = useState("kilometer");
  const [type, setType] = useState("length");
  const [result, setResult] = useState(null);

  const convert = async () => {
    const res = await fetch("http://localhost:5000/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: Number(value), from, to, type }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Unit Converter</h1>

      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <br /><br />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="length">Length</option>
        <option value="weight">Weight</option>
        <option value="temperature">Temperature</option>
      </select>

      <br /><br />

      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <br /><br />

      <button onClick={convert}>Convert</button>

      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;