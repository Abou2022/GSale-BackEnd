'use strict';

const jwt = require("jsonwebtoken");
const createError = require('http-errors');
const { User, Profile } = require('../models');

module.exports = {
    // post /signup
    async createUser(req, res, next) {
        try {
            const message = !req.body.password ? 'expected a password'
                : !req.body.email ? 'expected an email'
                    : null;
            if (message)
                return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
            const user = await User.create(req.body);
            const profile = await Profile.create({ userId: user._id, email: user.email });
            const token = jwt.sign({ userId: user._id, profileId: profile._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
            // res.cookie('gSaleToken', token);
            // res.send(token);
            // to do check and see how token is sent
            res.json({ token, profile });
        } catch (err) {
            console.log("createUser err: ", err);
            next(createError(500, err.message));
        }
    },
    // post /login
    async login(req, res, next) {
        try {
            const message = !req.body.password ? 'expected a password'
                : !req.body.email ? 'expected an email'
                    : null;
            if (message)
                return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
            const user = await User.findOne({ where: { email: req.body.email.toLowerCase() } });
            if (!user) {
                return res.status(403).send("invalid credentials")
            }
            const validPassword = await user.checkPassword(req.body.password);
            if (validPassword) {
                const profile = await Profile.create({ userId: user._id, email: user.email });
                const token = jwt.sign({ userId: user._id, profileId: profile._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
                res.json({ token, profile });
            } else {
                return res.status(403).send("invalid credentials");
            }
        } catch (err) {
            console.log("login err: ", err);
            next(createError(500, err.message));
        }
    },
    // post /logout
    async logout(req, res, next) {
        try {
            if (req.session.user.loggedIn) {
                // to do delete jsonwebtoken
                res.status(204).end();
            } else {
                res.status(404).end();
            }
        } catch (err) {
            console.log("logout err: ", err);
            next(createError(500, err.message));
        }
    },
    // put /:userId
    async updateUser(req, res, next) {
        try {
            // to do check if the user on the pre hook is the old or the new
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            // pre save probably new object
            !user ? res.status(404).json({ message: 'No user with this id!' }) : res.json(user);
        } catch (err) {
            console.log("update user err: ", err);
            next(createError(500, err.message))
        }
    },
    // get /:userId
    async getSingleUser(req, res, next) {
        try {
            const user = await User.findOne({ _id: req.params.userId });
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
        } catch (err) {
            console.log("get user err: ", err);
            next(createError(500, err.message))
        }
    },
};