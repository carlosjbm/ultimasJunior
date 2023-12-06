import { useEffect, useState } from "react";

export const useFetch = (url1, url2) => {
  const [res1, setRes1] = useState([]);
  const [firstWord, setfirstWord] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState();

  useEffect(() => {
    fetch(url1)
      .then((response) => response.json())
      .then((json) => {
        setLoading1(false);
        setRes1(json);
        let splitedFact = json.fact.split(" ");
        let firstWord = splitedFact.slice(0, 1).join(" ");
        setfirstWord(firstWord);
      })
      .catch((err) => console.log(err));

    fetch(url2)
      .then((response2) => response2)
      .then(() => {
        setLoading2(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    res1,
    firstWord,
    loading1,
    loading2,
  };
};
