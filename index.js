const express = require('express');
// set views directory
const path = require('path');
// require use of hogan middleware
const hoganMiddleware = require('hogan-middleware');

const app = express();
// connect the path to the correct views folder
app.set('views', path.join(__dirname, 'views'));
// set templating or view engine
app.set('view engine', 'mustache');
// establish hogan middleware
app.engine('mustache', hoganMiddleware.__express);

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.get('/json', (req, res, next) => {
	const data = {
		greeting: 'Hello :)',
	};
	res.json(data);
});

app.get('/home', (req, res, next) => {
	res.render('home', null);
});

app.listen(5000);
console.log('listening on port: ', 5000);
