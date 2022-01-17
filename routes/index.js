// Full Documentation - https://docs.turbo360.co
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {
		text: 'This is the dynamic data. Open index.js from the routes directory to see.',
	});
});

router.get('/query', (req, res) => {
	const name = req.query.name;
	const occupation = req.query.occupation;

	const data = {
		name: name,
		occupation: occupation,
	};

	res.render('profile', data);
});

router.get('/:path', (req, res) => {
	const path = req.params.path;
	res.json({
		path: path,
	});
});

module.exports = router;
