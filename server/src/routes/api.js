// Dependencies
import express from "express";
import request from "request";
import rp from "request-promise";
const router = express.Router();

// Routes
router.get("/getAllCountries", (req, res) => {
  request(
    "http://api.population.io:80/1.0/countries",
    (error, response, body) => {
      const result = JSON.parse(body);
      const countries = result.countries.map(function(country, index) {
        return { text: country, value: country, key: index };
      });
      res.status(200).json(countries);
    }
  );
});

router.post("/getCountries", (req, res) => {
  let { country1, country2, country3 } = req.body.countries;
  console.log(country2);
  request(
    `http://api.population.io:80/1.0/population/${country1}/2017-10-28/`,
    function(error, response, body) {
      console.log(body);
    }
  );
  res.status(200).json({ errors: { global: "invalid" } });
});

export default router;
