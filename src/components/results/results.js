import React from "react";
import ReactJson from "react-json-view";

function Results({ response, count, headers }) {
  return (
    <>
      <h3 title="count">Count: {count}</h3>
      <ReactJson name="Headers" src={headers} />
      <ReactJson name="Response" src={response} />
    </>
  );
}

export default Results;
