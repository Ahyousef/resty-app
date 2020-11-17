import React from "react";
import "./form-styles.scss";

function Form(props) {
  const handleClick = (e) => {
    e.preventDefault();
    const method = document.querySelector('input[name="method"]:checked').value;
    const url = document.querySelector('input[name="url"]').value;
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((rawdata) => {
      // console.log(rawdata.headers.get("content-type"));
      // return rawdata.json();
      props.handler(rawdata);
    });
    // .then((data) => {
    //   console.log(data);
    //   let object = {
    //     count: data.count,
    //     results: data.results,
    //     Headers: {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     }
    //   };
    //   props.handler(object);
    // });
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
        <input type="radio" id="get" name="method" value="get" defaultChecked />
        <label> POST </label>
        <input type="radio" id="POST" name="method" value="POST" />
        <label> PUT </label>
        <input type="radio" id="PUT" name="method" value="PUT" />
        <label> DELETE </label>
        <input type="radio" id="DELETE" name="method" value="DELETE" />
      </form>
      <p data-testid="test">{props.num}</p>
      <div></div>
    </>
  );
}

export default Form;
