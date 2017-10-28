import { FETCHED_COUNTRIES } from "../types";

export default function countries(state = {}, action = {}) {
  switch (action.type) {
    case FETCHED_COUNTRIES:
      return { countries: action.countries };
    default:
      return state;
  }
}
