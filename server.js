const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const API_PORT = process.env.PORT || 8000;

//routes
const products = require('./server/config/routes/products'),
admin = require('./server/config/routes/admin'),
cart = require('./server/config/routes/shopping-cart');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public/dist/public')));

app.use('/api/products', products);
app.use('/api/admin', admin);
app.use('/api/shopping-cart', cart);


app.listen(API_PORT, () => console.log(`Listening on port: ${API_PORT}`));
