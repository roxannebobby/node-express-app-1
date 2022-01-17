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
// set where static assest are held
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(5000);
console.log('listening on port: ', 5000);
