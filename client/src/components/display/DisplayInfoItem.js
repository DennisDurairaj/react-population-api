import React, { Component } from "react";
import propTypes from "prop-types";
import { Grid, List } from "semantic-ui-react";

export default class DisplayInfoItem extends Component {
  render() {
    return (
      <Grid.Column>
        <List divided verticalAlign="middle">
          <List.Item>
            <List.Header>{this.props.country.country}</List.Header>
          </List.Item>
          <List.Item>Population: {this.props.country.population}</List.Item>
          <List.Item>
            Female life expectancy: {
              this.props.country.femaleLifeExpectancy
            }{" "}
            yrs
          </List.Item>
          <List.Item>
            Male life expectancy: {this.props.country.maleLifeExpectancy} yrs
          </List.Item>
        </List>
      </Grid.Column>
    );
  }
}

DisplayInfoItem.propTypes = {
  country: propTypes.object.isRequired
};
