// Dependencies
import express from "express";
import request from "request";
import moment from "moment";
const router = express.Router();

// Routes

// Get list of all countries for dropdowns
router.get("/getAllCountries", (req, res) => {
  makeRequest("http://api.population.io:80/1.0/countries")
    .then(response => {
      // Semantic UI Dropdowns require each option in the dropdown to be an object with properties text, value and key
      const countries = response.countries.map((country, index) => {
        return { text: country, value: country, key: index };
      });
      res.status(200).json(countries);
    })
    .catch(err => {
      console.log(Error(err));
    });
});

// Get selected countries population
router.post("/getCountries", (req, res) => {
  let countries = req.body.countries;
  const today = moment(new Date()).format("YYYY-MM-DD");
  let countriesPromises = countries.map((country, index) => {
    return makeRequest(
      `http://api.population.io:80/1.0/population/${country.country}/2017-10-28/`
    )
      .then(res => {
        country.population = res.total_population.population;
        return hydrateWithFemaleLifeExpectancy(country);
      })
      .then(res => {
        return hydrateWithMaleLifeExpectancy(res);
      });
  });

  Promise.all(countriesPromises)
    .then(responses => {
      res.status(200).json(responses);
    })
    .catch(err => {
      console.log(Error(err));
    });
});

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    // Fetch the data from the API
    request({ url: url, json: true }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject(Error(error));
      } else {
        // onSuccess send the data
        resolve(body);
      }
    });
  });
  // Create a new Promise
}

function hydrateWithFemaleLifeExpectancy(data) {
  return new Promise((resolve, reject) => {
    makeRequest(
      `http://api.population.io:80/1.0/life-expectancy/total/female/${data.country}/1952-01-01/`
    )
      .then(res => {
        data.femaleLifeExpectancy = res.total_life_expectancy;
        resolve(data);
      })
      .catch(err => {
        reject(Error(err));
      });
  });
}

function hydrateWithMaleLifeExpectancy(data) {
  return new Promise((resolve, reject) => {
    makeRequest(
      `http://api.population.io:80/1.0/life-expectancy/total/male/${data.country}/1952-01-01/`
    )
      .then(res => {
        data.maleLifeExpectancy = res.total_life_expectancy;
        resolve(data);
      })
      .catch(err => {
        reject(Error(err));
      });
  });
}

export default router;
