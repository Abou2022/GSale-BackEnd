'use strict';

const express = require('express');
const routes = require('./controllers'); //look for index.js in routes
// import sequelize connection
const compression = require('compression');
const cors = require("cors");
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //allows other url encoding

app.use(compression());

const whitelist = [process.env.WHITELIST, 'http://localhost:3000', 'https://gsalefrontend.herokuapp.com/', 'https://gsalefrontend.herokuapp.com', 'http://localhost:3000', 'https://www.gsalefrontend.herokuapp.com/', 'https://www.gsalefrontend.herokuapp.com'];
app.use(cors({
    credentials: true,
    origin: (origin, cb) => {
        if (whitelist.indexOf(origin) != -1 || origin === undefined) {
            cb(null, true);
        } else {
            cb(new Error(`${origin} Not allowed by CORS`));
        }
    },
}));

const { Attendee, Category, Comment, GarageSaleEvent, Item, Profile, User, Vendor } = require("./models");

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
