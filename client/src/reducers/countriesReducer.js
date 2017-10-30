import { FETCHED_COUNTRIES_INFO, FETCHED_COUNTRIES_LIST } from "../types";

export default function countriesReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHED_COUNTRIES_INFO:
      return { ...state, countriesInfo: action.countriesInfo };
    case FETCHED_COUNTRIES_LIST:
      return { ...state, countriesList: action.countriesList };
    default:
      return state;
  }
}
