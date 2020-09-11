const express = require('express');

const config = require('./config.js');

const app = express();

app.get('/', (req, res) => {
	res.send(`Server working in ${config.NODE_ENV} mode`);
});

app.listen(config.PORT, config.HOST, function () {
	console.log(
		`App listening on http://${config.HOST}:${config.PORT} in ${config.NODE_ENV} mode`,
	);
});
