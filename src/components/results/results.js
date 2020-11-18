import React from "react";
import "./result-styles.scss";

import ReactJson from "react-json-view";
import { If, Then, Else } from "../if/if";
import gif from "../loading.gif";

class Results extends React.Component {
  render() {
    return (
      <>
        <If condition={this.props.loading}>
          <Then>
            <img src={gif} alt="loading..." className="gif" />
          </Then>
          <Else>
            <If condition={this.props.count}>
              <Then>
                <h3 title="count">Count: {this.props.count}</h3>
                <ReactJson name="Headers" src={this.props.headers} />
                <ReactJson name="Response" src={this.props.response} />
              </Then>
              <Else>
                <h2>No Results</h2>
              </Else>
            </If>
          </Else>
        </If>
      </>
    );
  }
}

export default Results;
