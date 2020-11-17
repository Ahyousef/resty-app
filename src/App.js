import React from "react";
import "./styles.scss";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/results/results";

var Count;
var Headers;
var Response;

class App extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = { count: 0, results: [], num: 0 };
  }
  handleForm = async (data) => {
    console.log("App recieved these results from form", data);
    Headers = {
      "Content-Type": "application/json"
    };
    Response = await data.json();
    Count = Response.count;

    console.log(Count, Headers, Response);
    this.setState({ num: this.state.num + 1 });
    this.setState({ results: Response.results });
    this.setState({ count: Count });
  };
  render() {
    return (
      <main>
        <Header />
        <Form handler={this.handleForm} num={this.state.num} />
        <Results response={Response} count={Count} headers={Headers} />
        <Footer />
      </main>
    );
  }
}

export default App;
