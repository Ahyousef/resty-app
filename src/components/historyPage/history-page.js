import React from "react";
import QueryItem from "./query-item";
import "./history-page.scss";
const History = (props) => (
  <>
    <ul className="historypage">
      <h2>History of previous queries</h2>
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
