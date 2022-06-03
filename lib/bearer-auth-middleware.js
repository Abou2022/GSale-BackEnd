"use strict";

const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const { User } = require("../models");

const bearerAuth = (req, res, next) => {
    console.log("bearer/token auth");

    const token = req.headers?.authorization?.split(" ").pop();

    if (!token) return res.status(403).send("No token provided");
    //   next(createError(401, "AUTH ERROR: not bearer auth"));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(err);
        } else {
            console.log("decoded", decoded);
            req.userId = decoded.userId;
            req.profileId = decoded.profileId;
            next();
        }
    });
};

module.exports = bearerAuth;