'use strict';

const express = require('express');
const compression = require('compression');
const cors = require("cors");

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(routes);

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server for ${activity} running on port ${PORT}!`);
	});
});