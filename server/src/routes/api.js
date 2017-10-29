// Dependencies
import express from "express";
import request from "request";
const router = express.Router();

function makeRequest(url, what) {
  // Create a new Promise
  return new Promise(function(resolve, reject) {
    // Fetch the data from the API
    request(
      {
        url: url
      },
      function(error, response, body) {
        if (error || response.statusCode !== 200) {
          reject(Error(error));
        } else {
          // onSuccess send the data
          resolve(body);
        }
      }
    );
  });
}

// Routes
router.get("/getAllCountries", (req, res) => {
  makeRequest("http://api.population.io:80/1.0/countries")
    .then(response => {
      const result = JSON.parse(response);
      // Semantic UI Dropdowns require each option in the dropdown to be an object with properties text, value and key
      const countries = result.countries.map(function(country, index) {
        return { text: country, value: country, key: index };
      });
      res.status(200).json(countries);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/getCountries", (req, res) => {
  let countries = req.body.countries;
  let countriesPromises = countries.map((country, index) => {
    return makeRequest(
      `http://api.population.io:80/1.0/population/${country.name}/2017-10-28/`
    );
  });
  Promise.all(countriesPromises).then(function(responses) {
    console.log(responses);
    res.status(200).json(responses);
  });
});

export default router;
