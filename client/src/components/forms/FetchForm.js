import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import propTypes from "prop-types";

export default class FetchForm extends Component {
  state = {
    countries: {
      country1: "",
      country2: "",
      country3: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      countries: { ...this.state.countries, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.countries);
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="countries">Pick three countries</label>
          <input
            type="text"
            id="country1"
            name="country1"
            value={this.state.countries.country1}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            id="country2"
            name="country2"
            value={this.state.countries.country2}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            id="country3"
            name="country3"
            value={this.state.countries.country3}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button primary>Fetch</Button>
      </Form>
    );
  }
}

FetchForm.propTypes = {
  submit: propTypes.func.isRequired
};
