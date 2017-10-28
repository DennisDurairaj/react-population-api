import axios from "axios";

export default {
  countries: {
    fetchCountries: countries =>
      axios.post("/api/getCountries", { countries }).then(res => {
        console.log(res.data);
        return res.data;
      })
  }
};
