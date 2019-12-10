'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

// ROUTES:
app.get('/location', (req, res) => {
  let city = req.query.data;

  let locationObj = searchLatToLong(city);

  res.send(locationObj);
  console.log(locationObj)
});

function searchLatToLong(city) {
  const geoData = require('./data/geo.json');

  const geoDataResults = geoData.results[0];

  const locationObj = new Location(city, geoDataResults);

  // const locationObj = {
  //   "search_query": city,
  //   "formatted_query": geoDataResults.formatted_address,
  //   "latitude": geoDataResults.geometry.location.lat,
  //   "longitude": geoDataResults.geometry.location.lng,
  // };

  return locationObj;
}

function Location(city, geoDataResults) {
  // eslint-disable-next-line camelcase
  this.search_query = city;
  // eslint-disable-next-line camelcase
  this.formatted_query = geoDataResults.formatted_address;
  this.latitude = geoDataResults.geometry.location.lat;
  this.longitude = geoDataResults.geometry.location.lng;
}



app.get('*', (req, res) => {
  res.status(404).send('page not found!');
});
