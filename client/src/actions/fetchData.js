import { FETCHED_COUNTRIES } from "../types";
import api from "../api/fetchCountriesApi";

// export function fetchedCountries(countries) {
//   type: FETCHED_COUNTRIES, countries;
// }

export const fetchedCountries = countries => ({
  type: FETCHED_COUNTRIES,
  countries
});

// export function fetchCountries(countries) {
//   return dispatch => {
//     return api.countries.fetchCountries(countries).then(countries => {
//       dispatch(fetchedCountries(countries));
//     });
//   };
// }

export const fetchCountries = countries => dispatch =>
  api.countries
    .fetchCountries(countries)
    .then(countries => dispatch(fetchedCountries(countries)));
