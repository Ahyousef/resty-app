import React from "react";

function History(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.loadingHandler(true);
    const method = document.querySelector('input[name="method"]:checked').value;
    const url = document.querySelector('input[name="url"]').value;
    if (method === "GET") {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        }
      }).then((rawdata) => {
        // console.log(rawdata.headers.get("content-type"));
        // return rawdata.json();
        props.handler(rawdata, method);
      });
    } else {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then((rawdata) => {
        // console.log(rawdata.headers.get("content-type"));
        // return rawdata.json();
        props.handler(rawdata);
      });
    }
  };
  return (
    <>
      <form>
        <label> URL: </label>
        <input name="url" type="text" />
        <button id="button" onClick={handleClick}>
          GO!
        </button>
        <br></br>
        <label> GET </label>
        <input type="radio" id="get" name="method" value="GET" defaultChecked />
        <label> POST </label>
        <input type="radio" id="POST" name="method" value="POST" />
        <label> PUT </label>
        <input type="radio" id="PUT" name="method" value="PUT" />
        <label> DELETE </label>
        <input type="radio" id="DELETE" name="method" value="DELETE" />
      </form>
      <p data-testid="test">Testing number: {props.num}</p>
      <div></div>
    </>
  );
}

export default History;
