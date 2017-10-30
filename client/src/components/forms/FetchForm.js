import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Dropdown, Message } from "semantic-ui-react";
import { fetchCountriesList } from "../../actions/fetchData";
import propTypes from "prop-types";

class FetchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loading: false,
      error: ""
    };
  }

  componentDidMount() {
    this.props.fetchCountriesList();
  }

  onChange = input => {
    this.setState({
      countries: [
        ...this.state.countries.filter(country => input.id !== country.key),
        { key: input.id, country: input.value }
      ]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props
      .submit(this.state.countries)
      .then(res => {
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err.response.data.error, loading: false });
      });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} loading={this.state.loading}>
        {this.state.error ? (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p>{this.state.error}</p>
          </Message>
        ) : (
          ""
        )}
        <Form.Field>
          <label htmlFor="countries">Pick three countries</label>
          {/* Pass dropdown options empty array for initial render until async 
          request finishes in order to prevent console error */}
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.props.countriesList || []}
            id="country1"
            onChange={(param, data) => this.onChange(data)}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.props.countriesList || []}
            id="country2"
            onChange={(param, data) => this.onChange(data)}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={this.props.countriesList || []}
            id="country3"
            onChange={(param, data) => this.onChange(data)}
          />
        </Form.Field>
        <Button primary>Fetch</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    countriesList: state.countries.countriesList
  };
}

FetchForm.propTypes = {
  countriesList: propTypes.array,
  fetchCountriesList: propTypes.func.isRequired,
  submit: propTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchCountriesList })(FetchForm);
