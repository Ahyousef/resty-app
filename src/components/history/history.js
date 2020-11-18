import React from "react";
import QueryItem from "./query-item";
const History = (props) => (
  <>
    <h2>History of previous queries</h2>
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
  </>
);

export default History;
