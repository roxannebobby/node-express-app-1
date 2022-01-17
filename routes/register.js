const express = require('express');
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const router = express.Router();

router.post('/user', (req, res) => {
	const body = req.body; // this normally comes from a website post form

	res.json({
		confirmation: 'success',
		route: 'register',
		data: body,
	});
});

module.exports = router;
