/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

/**
 * Load Environment Variables
 * When developing or testing the code, use the test keys,
 * otherwise, use the keys provided by the environment.
 */
 if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

/**
 * Routes
 */
const api = require('./routes/api');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('host', process.env.HOST);
app.set('port', process.env.PORT);

app.use(logger(process.env.LOG_LEVEL));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

// sample get request
app.get('/', function (req, res) {
    res.send("It's working!");
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('App is running at %s:%d in %s mode',require('os').hostname, app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
