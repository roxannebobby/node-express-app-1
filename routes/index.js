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

	res.json({
		name: name,
		occupation: occupation,
	});
});

router.get('/:path', (req, res) => {
	const path = req.params.path;
	res.json({
		path: path,
	});
});

router.get('/:profile/:username', (req, res, next) => {
	const profile = req.params.profile;
	const username = req.params.username;
	res.json({
		profileVariable: profile,
		usernameVariable: username,
	});
});

module.exports = router;
