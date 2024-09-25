import React, { useState } from "react";

const App = () => {
  const [degrees, setDegrees] = useState("");
  const [type, setType] = useState("Fahrenheit");
  const [resultValue, setResultValue] = useState("");

  const convertTemperature = (degrees, unit) => {
    if (unit === "Fahrenheit") {
      const celsius = (5 / 9) * (degrees - 32);
      return celsius.toFixed(4);
    } else {
      const farenheit = (9 / 5) * degrees + 32;
      return farenheit.toFixed(4);
    }
  };

  const handleConversion = (e) => {
    e.preventDefault();

    const result = convertTemperature(degrees, type);
    setResultValue(result);
  };

  const handleReset = () => {
    setDegrees("");
    setType("Fahrenheit");
    setResultValue("");
  };

  const handleTypeChange = (newType) => {
    setType(newType);

    if (degrees) {
      const result = convertTemperature(degrees, newType);
      setResultValue(result);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-4/5 lg:w-6/12 xl:w-2/5 h-auto flex items-center justify-center shadow-2xl rounded-md flex-col py-4 px-4">
        <h1 className="text-2xl font-semibold mb-4">Temperature Conversion</h1>
        <form
          onSubmit={handleConversion}
          className="flex flex-col gap-4 w-full">
          <div className="w-full flex gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="degrees">Degrees</label>
              <input
                type="number"
                name="degrees"
                className="border border-black py-1 px-2 rounded-sm"
                value={degrees}
                onChange={(e) => setDegrees(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="selection">Type</label>
              <select
                name="selection"
                className="border border-black py-1 px-2 rounded-sm"
                onChange={(e) => handleTypeChange(e.target.value)}
                value={type}>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Celsius">Celsius</option>
              </select>
            </div>
          </div>
          {resultValue && (
            <div>
              <label htmlFor="result">Result</label>
              <p name="result" className="text-xl">
                <b>
                  {type === "Fahrenheit"
                    ? `${resultValue}°C`
                    : `${resultValue}°F`}
                </b>
              </p>
            </div>
          )}
          <div className="w-full flex flex-col gap-2">
            <button
              type="submit"
              className="w-full bg-blue-600 py-2 rounded-sm text-white">
              Convert
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-red-600 py-2 rounded-sm text-white">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
