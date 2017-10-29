import { FETCHED_COUNTRIES } from "../types";
import api from "../api/fetchCountriesApi";

export const fetchedCountries = countriesInfo => ({
  type: FETCHED_COUNTRIES,
  countriesInfo
});

export const fetchCountries = countries => dispatch =>
  api.countries
    .fetchCountries(countries)
    .then(countries => dispatch(fetchedCountries(countries)));
