
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300
}));

app.use('/api', require('./routes/index'));

app.use(errorHandler);

module.exports = app;
