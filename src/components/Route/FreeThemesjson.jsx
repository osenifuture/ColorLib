import Freecard from "./FreeCard";
import { useState, useEffect } from "react";

const FreeThemesjson = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const FetchApis = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_start0&_limit=20",
          {
            method: "GET",
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        setNames(responseData);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    };
    FetchApis();
  }, []);

  return (
    <div className="free-container">
      {names.map((name) => (
        <Freecard key={name.id} photos={name} />
      ))}
    </div>
  );
};

export default FreeThemesjson;
