import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full flex items-center justify-center text-center">
      <div className="h-auto w-9/12 md:w-3/12 shadow-2xl bg-blue-800 text-white py-5">
        <h1 className="text-7xl">{count}</h1>
        <div className="flex items-center justify-center gap-4 my-6">
          <button
            onClick={() => setCount((count) => count - 1)}
            className="bg-white px-10 py-1 text-black text-2xl font-bold shadow-2xl">
            -
          </button>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-white px-10 py-1 text-black text-2xl font-bold shadow-2xl">
            +
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className="bg-red-600 w-full py-2 text-white text-base font-semibold shadow-2xl">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
