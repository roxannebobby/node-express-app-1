// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });

const app = vertex.express(); // initialize app

// timestamp middlewear function
app.use((req, res, next) => {
	const timestamp = new Date();
	req.timestamp = timestamp.toString();
	next();
});



// import routes
const index = require('./routes/index');
const register = require('./routes/register');

// set routes
app.use('/', index);
app.use('/register', register);

module.exports = app;
