import React from "react";
import "./styles.scss";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";
import History from "./components/history/history";

var Count;
var Headers;
var Response;
var previousQueries = [];

if (localStorage.getItem("previousQueries") !== null) {
  previousQueries = JSON.parse(localStorage.getItem("previousQueries"));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = { count: 0, results: [], num: 0, loading: false };
  }
  handleForm = async (data, method) => {
    console.log("App recieved these results from form", data);
    Headers = {
      "Content-Type": "application/json"
    };
    Response = await data.json();
    Count = Response.count;
    this.loadingHandler(false);
    this.setState({
      num: this.state.num + 1,
      results: Response.results,
      count: Count
    });
    let unique = true;
    previousQueries.forEach((query) => {
      let values = Object.values(query);
      if (values[0] === method && values[1] === data.url) {
        unique = false;
      }
    });
    if (unique) {
      previousQueries.push({ method: method, url: data.url });
      let JSONpreviousQueries = JSON.stringify(previousQueries);
      localStorage.setItem("previousQueries", JSONpreviousQueries);
    }
    console.log(previousQueries);
  };
  loadingHandler = (status) => {
    this.setState({ loading: status });
  };
  ReUseQuery = (query) => {
    document.querySelector('input[name="url"]').value = query.id;
    document.getElementById(query.title).checked = true;
    document.getElementById("button").click();
  };
  render() {
    return (
      <main>
        <Header />
        <Form
          handler={this.handleForm}
          num={this.state.num}
          loadingHandler={this.loadingHandler}
        />
        <History
          previousQueries={previousQueries}
          ReUseQuery={this.ReUseQuery}
        />
        <Results
          response={Response}
          count={Count}
          headers={Headers}
          loading={this.state.loading}
        />
        <Footer />
      </main>
    );
  }
}

export default App;
