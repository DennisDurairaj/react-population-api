import axios from "axios";

export default {
  // Fetch selected countries data
  countriesInfo: {
    fetchCountriesInfo: countries =>
      axios.post("/api/getCountries", { countries }).then(res => {
        return res.data;
      })
  },
  // List of all countries
  countriesList: {
    fetchCountriesList: () => {
      return axios.get("/api/getAllCountries").then(res => {
        return res.data;
      });
    }
  }
};
