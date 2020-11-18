import React from "react";
import QueryItem from "./query-item";
const History = (props) => (
  <ul>
    {props.previousQueries.map((query) => {
      return (
        <QueryItem
          key={query.method + query.url}
          query={query}
          ReUseQuery={props.ReUseQuery}
        />
      );
    })}
  </ul>
);

export default History;
