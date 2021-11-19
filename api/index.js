require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const days = require('./data');

app.get('/api', (req, res) => {
  const date = new Date();

  const output = days.map((day) => {
    const allowed = date.getMonth() === 11 && date.getDate() >= day.day;

    return {
      day: day.day,
      allowed: allowed,
      message: allowed && day.message,
    };
  });

  res.status(200).send(output);
});

app.all('*', (req, res) => {
  res
    .status(404)
    .send(`Error 404: Can't find ${req.originalUrl} on this server!`);
});

app.listen(port, () => console.log(`API listening on port ${port}`));
