import React, { Component } from "react";

export default class DisplayInfo extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.countriesInfo.map((country, index) => {
            return <div>Hello</div>;
          })}
        </div>
      </div>
    );
  }
}
