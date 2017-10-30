import React, { Component } from "react";
import { Header, Divider, Grid } from "semantic-ui-react";
import DisplayInfoItem from "./DisplayInfoItem";

export default class DisplayInfo extends Component {
  render() {
    return (
      <div>
        <Divider />
        <Header as="h2">Population and life expectancy</Header>
        <Grid columns={3} divided>
          <Grid.Row>
            {this.props.countriesInfo.map((country, index) => {
              console.log(country);
              return <DisplayInfoItem country={country} key={country.key} />;
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
