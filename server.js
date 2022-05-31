'use strict';

const express = require('express');
const compression = require('compression');
const cors = require("cors");

const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true })); // parses incoming requests with URL-encoded payloads.
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(compression());

const whitelist = ['http://localhost:3000'];
app.use(cors({
    credentials: true,
    origin: (origin, cb) => {
        if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
            cb(null, true);
        } else {
            cb(new Error(`${origin} Not allowed by CORS`));
        }
    },
}));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});