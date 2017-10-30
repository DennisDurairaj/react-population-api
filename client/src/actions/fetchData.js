import { FETCHED_COUNTRIES_INFO, FETCHED_COUNTRIES_LIST } from "../types";
import api from "../api/fetchCountriesApi";

export const fetchedCountriesInfo = countriesInfo => ({
  type: FETCHED_COUNTRIES_INFO,
  countriesInfo
});

export const fetchedCountriesList = countriesList => ({
  type: FETCHED_COUNTRIES_LIST,
  countriesList
});

export const fetchCountriesList = () => dispatch =>
  api.countriesList
    .fetchCountriesList()
    .then(countriesList => dispatch(fetchedCountriesList(countriesList)));

export const fetchCountriesInfo = countries => dispatch =>
  api.countriesInfo
    .fetchCountriesInfo(countries)
    .then(countriesInfo => dispatch(fetchedCountriesInfo(countriesInfo)));
