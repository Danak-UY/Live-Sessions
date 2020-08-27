import { useState, useEffect } from "react";

const useGoogleSearch = (term, page) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (term) {
      const fetchData = async () => {
        await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}&filter=1&start=${
            page * 10 + 1
          }`
        )
          .then((response) => response.json())
          .then((result) => setData(result))
          .catch((err) => setData(null));
      };
      fetchData();
      console.log("google search", term, page);
    }
  }, [term, page]);
  return { data };
};

export default useGoogleSearch;
