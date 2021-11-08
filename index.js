const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const AUTH_TOKEN = require('./github.config.js').TOKEN;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public/graphics')));
// console.log(path.join(__dirname, '/public'))
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

app.get('/api/products/:productId/styles', catchAsync(async (req, res) => {
  const result = await axios.get(`${baseURL}/products/${req.params.productId}/styles`);
  res.status(200).json({
    status: 'success',
    results: result.data.results
  })
}));
//meta?product_id=${req.params.productId}

app.get('/api/reviews/meta/:productId', catchAsync(async (req, res) => {
  const results = await axios.get(`${baseURL}/reviews/meta/?product_id=${req.params.productId}`);
  res.status(200).json({
    status: 'success',
    ratings: results.data.ratings
  })
}));
app.get('/api/reviews/:productId', catchAsync(async (req, res) => {
  const results = await axios.get(`${baseURL}/reviews/?product_id=${req.params.productId}`);
  res.status(200).json({
    status: 'success',
    ratings: results.data.results,
    quantity: results.data.count,
  })
}));

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
app.get('/api/reviews/:sort/:product_id', async (req, res) => {
  // console.log('A Review request was called');
  const result = await axios.get(`${baseURL}/reviews/?sort=${req.params.sort}&product_id=${req.params.product_id}`);
  // ${req.params.sort}
  res.status(200).json({
    status: 'sucess',
    results: result.data.results
  })
});

// Fetch Reviews Metadata
app.get('/reviews/meta/:product_id', async (req, res) => {
  console.log('Metadata Get Request recieved! Product Id: ', req.params.product_id);
  const result = await axios.get(`${baseURL}/reviews/meta/?product_id=${req.params.product_id}`);
  // console.log(result.data);
  res.status(200).json({
    status: 'sucess',
    results: result.data
  });
});


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});