const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('!Box: Parcel Tracking Application').end();
});

module.exports = app
