import React from "react";
import FetchForm from "../forms/FetchForm";

class Home extends React.Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <FetchForm submit={this.submit} />
      </div>
    );
  }
}

export default Home;
