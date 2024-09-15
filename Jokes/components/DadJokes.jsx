import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const DadJokes = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [onPunchline, setOnPunchline] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = await response.json();
      setJoke(data.setup);
      setPunchline(data.punchline);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handlePunchline = () => {
    setOnPunchline(true);
  };

  const handleNextJoke = () => {
    setOnPunchline(false);
    fetchJoke();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center text-center bg-green-500">
      <div className="w-10/12 lg:w-6/12 h-auto shadow-2xl py-4 px-6 rounded-md bg-white">
        <h1 className="text-xl font-bold">Jokes Generator</h1>
        <p className="p-3">
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="50"
              width="50"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              wrapperClass=""
            />
          ) : (
            joke
          )}
        </p>
        <p className={`font-bold mb-4 text-2xl ${onPunchline ? "" : "hidden"}`}>
          {punchline}
        </p>
        <hr />
        <div className="flex gap-4">
          <button
            onClick={handlePunchline}
            disabled={isLoading}
            className="py-2 px-10 bg-red-600 text-white w-6/12 mt-4 rounded-sm font-semibold">
            Click For The Punchline
          </button>
          <button
            onClick={handleNextJoke}
            disabled={isLoading}
            className="py-2 px-10 bg-blue-600 text-white w-6/12 mt-4 rounded-sm font-semibold">
            Next Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default DadJokes;
