const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const AUTH_TOKEN = require('./github.config.js').TOKEN;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/graphics')));
console.log(path.join(__dirname, '/public'))
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

app.get('/api/products/:productId/styles', async (req, res) => {
  // console.log(req)
  const result = await axios.get(`${baseURL}/products/${req.params.productId}/styles`);
  res.status(200).json({
    status: 'success',
    results: result.data.results
  })
});

app.get('/reviews/meta/:productID', function (req, res) {
  axios.get(`${baseURL}/reviews/meta/?product_id=${req.params.productID}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => res.status(500).send(err))
});

app.get('/products/:productID/related', function (req, res) {
  axios.get(`${baseURL}/products/${req.params.productID}/related`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => res.status(500).send(err))
});

app.get('/products/:productID', function (req, res) {
  axios.get(`${baseURL}/products/${req.params.productID}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => res.status(500).send(err))
})


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});