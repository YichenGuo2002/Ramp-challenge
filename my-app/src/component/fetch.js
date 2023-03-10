import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

const Fetch = (props) => {
  const URL =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f";

  const [loading, setLoading] = useState(true);
  const [webData, setWebData] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL, { method: "GET" });
        const data = await response.text();
        setWebData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [URL]);

  useEffect(() => {
    if (!loading && characters.length < webData.length) {
      let interval = setInterval(() => {
        setCharacters((previousState) => {
          const next = [...previousState, webData[previousState.length]];
          return next;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [loading, webData, characters]);

  return (
    <div>
      {loading? (
        <div>Loading...</div>
      ) : (
        <ul>
          {characters.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetch;