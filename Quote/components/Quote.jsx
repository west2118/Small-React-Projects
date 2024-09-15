import React, { useEffect, useState } from "react";
import { RotatingLines, ThreeDots } from "react-loader-spinner";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    const category = "happiness";
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "IQyZPPROtT4ZIvODdaFr7Zb5QjebUogUY03KFgpV",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setQuote(data[0].quote);
      setAuthor("- " + data[0].author);
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleGenerate = () => {
    fetchQuote();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center text-center bg-violet-500">
      <div className="w-10/12 lg:w-6/12 h-auto shadow-2xl py-4 px-6 rounded-md bg-white">
        <p className="text-3xl">
          <i className="bx bxs-quote-alt-right text-green-400"></i>
        </p>
        <p className="m-4 flex items-center justify-center">
          {isLoading ? (
            <RotatingLines
              visible={true}
              height="50"
              width="50"
              color="purple"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            quote
          )}
        </p>
        <hr />
        <div className="flex items-center justify-between mt-3">
          <p>
            <span>
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="30"
                  width="30"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                author
              )}
            </span>
          </p>
          <button
            className="flex items-center justify-center gap-1"
            disabled={isLoading}
            onClick={handleGenerate}>
            New Quote <i className="bx bx-right-arrow-alt text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
