import React from "react";
import { useStateValue } from "./../components/StateProvider";
import useGoogleSearch from "./../useGoogleSearch";

import Response from "./../response";

function ResultPage() {
  const [{ query }, dispatch] = useStateValue();
  // LIVE API DATA
  //const { data } = useGoogleSearch(query);
  const data = Response;
  console.log(data);
  return <div>{query}</div>;
}

export default ResultPage;
