import axios from "axios";

export default {
  countriesInfo: {
    fetchCountriesInfo: countries =>
      axios.post("/api/getCountries", { countries }).then(res => {
        return res.data;
      })
  },
  countriesList: {
    fetchCountriesList: () => {
      return axios.get("/api/getAllCountries").then(res => {
        return res.data;
      });
    }
  }
};
