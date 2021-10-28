const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const AUTH_TOKEN = require('./github.config.js').TOKEN;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
