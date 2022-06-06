"use strict";

const jwt = require("jsonwebtoken");

const bearerAuth = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ").pop();
    if (!token) {
        return res.status(403).send("No token provided");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log("JWT Verify Error: ", err);
            return res.status(403).send("Invalid token");
        } else {
            req.userId = decoded.userId;
            req.profileId = decoded.profileId;
            next();
        }
    });
};

module.exports = bearerAuth;