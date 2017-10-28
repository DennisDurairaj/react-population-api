import React from "react";
import { connect } from "react-redux";
import FetchForm from "../forms/FetchForm";
import { fetchCountries } from "../../actions/fetchData";

class Home extends React.Component {
  submit = data => {
    return this.props.fetchCountries(data);
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

export default connect(null, { fetchCountries })(Home);
