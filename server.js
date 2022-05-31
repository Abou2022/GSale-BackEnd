'use strict';

const express = require('express');
const session = require('express-session');
const compression = require('compression');
const cors = require("cors");

const db = require('./config/connection');
const MongoStore = require('connect-mongo');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    store: MongoStore.create({
        client: db.getClient(),
        dbName: "gSaleDB", // *** IMPORTANT UPDATE THIS TO MATCH DBNAME ON DEPLOYED !!!!
        stringify: false,
        autoRemove: 'interval',
        autoRemoveInterval: 1,
    }),
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});