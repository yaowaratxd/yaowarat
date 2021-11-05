const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const AUTH_TOKEN = require('./github.config.js').TOKEN;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.get('/api/products/:productId/styles', async (req, res) => {
  const result = await axios.get(`${baseURL}/products/${req.params.productId}/styles`);
  res.status(200).json({
    status: 'success',
    results: result.data.results
  })
});




app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});