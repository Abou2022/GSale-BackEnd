'use strict';

const express = require('express');
const compression = require('compression');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(routes);

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server for ${activity} running on port ${PORT}!`);
	});
});