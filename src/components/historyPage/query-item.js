import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function QueryItem(query) {
  const history = useHistory();

  async function handleClick(e) {
    await history.push("/");
    query.ReUseQuery(e.target.parentNode);
  }

  return (
    <li id={query.query.url} title={query.query.method}>
      <p>Method:{query.query.method}</p> <p>URL:{query.query.url}</p>
      <button onClick={handleClick}>ReRun</button>
    </li>
  );
}
