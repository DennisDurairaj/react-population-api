import React, { Component } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import propTypes from "prop-types";
import axios from "axios";

export default class FetchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: {
        country1: "",
        country2: "",
        country3: ""
      },
      countriesList: [],
      loading: false
    };
  }

  componentDidMount() {
    axios.get("/api/getAllCountries").then(res => {
      console.log(res);
      this.setState({
        countriesList: res.data
      });
    });
  }

  onChange = input => {
    this.setState({
      countries: { ...this.state.countries, [input.name]: input.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.submit(this.state.countries).then(res => {
      console.log(res);
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} loading={this.state.loading}>
        <Form.Field>
          <label htmlFor="countries">Pick three countries</label>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.state.countriesList}
            name="country1"
            onChange={(param, data) => this.onChange(data)}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.state.countriesList}
            name="country2"
            onChange={(param, data) => this.onChange(data)}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.state.countriesList}
            name="country3"
            onChange={(param, data) => this.onChange(data)}
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
