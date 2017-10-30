import React from "react";
import { connect } from "react-redux";
import FetchForm from "../forms/FetchForm";
import DisplayInfo from "../display/DisplayInfo";
import { fetchCountriesInfo } from "../../actions/fetchData";

class Home extends React.Component {
  submit = data => {
    return this.props.fetchCountriesInfo(data);
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <FetchForm submit={this.submit} />
        {this.props.countriesInfo ? (
          <DisplayInfo countriesInfo={this.props.countriesInfo} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    countriesInfo: state.countries.countriesInfo
  };
}

export default connect(mapStateToProps, { fetchCountriesInfo })(Home);
