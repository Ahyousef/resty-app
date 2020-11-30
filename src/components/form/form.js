import React from "react";
import "./form-styles.scss";

var body = "body";
function Form(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.loadingHandler(true);
    const method = document.querySelector('input[name="method"]:checked').value;
    const url = document.querySelector('input[name="url"]').value;
    const body = document.querySelector('input[name="body"]').value;
    if (method === "GET") {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((rawdata) => {
          // console.log(rawdata.headers.get("content-type"));
          // return rawdata.json();
          props.handler(rawdata, method);
        })
        .catch((error) => {
          console.log("caught");
          props.handler(error);
        });
    } else {
      console.log(JSON.stringify(body));
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then((rawdata) => {
          // console.log(rawdata.headers.get("content-type"));
          // return rawdata.json();
          props.handler(rawdata, method);
        })
        .catch((error) => {
          console.log("caught");
          props.handler(error);
        });
    }
  };
  return (
    <>
      <form>
        <label> URL: </label>
        <input name="url" type="text" required />
        <label> Body: </label>
        <input name="body" type="text" />
        <button id="button" onClick={handleClick}>
          GO!
        </button>
        <br></br>
        <label> GET </label>
        <input type="radio" id="GET" name="method" value="GET" defaultChecked />
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

export default Form;
