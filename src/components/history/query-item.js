import React from "react";

export default function QueryItem(query) {
  return (
    <li
      id={query.query.url}
      title={query.query.method}
      onClick={(e) => query.ReUseQuery(e.target)}
    >
      Method:{query.query.method} URL:{query.query.url}
    </li>
  );
}
