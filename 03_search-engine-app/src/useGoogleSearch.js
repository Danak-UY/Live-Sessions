import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (term) {
      const fetchData = async () => {
        await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`
        )
          .then((response) => response.json())
          .then((result) => setData(result));
      };
      fetchData();
    }
  }, [term]);
  return { data };
};

export default useGoogleSearch;
