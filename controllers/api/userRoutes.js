"use strict";

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User, Profile, Category } = require("../../models");
const bearerAuth = require("../../lib/bearer-auth-middleware");

// post
router.post("/", async (req, res) => {
    try {
        const message = !req.body.password
            ? "expected a password"
            : !req.body.email
                ? "expected an email"
                : null;
        if (message) return res.status(400).json(`BAD REQUEST ERROR: ${message}`);

        const [user, category] = await Promise.all([await User.create(req.body), await Category.create()]);
        const profile = await Profile.create({ user_id: user.id, category_id: category.id, email: user.email });
        const token = jwt.sign({ userId: user.id, profileId: profile.id }, process.env.JWT_SECRET, { expiresIn: "8h" });
        res.json({ token, profile });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const message = !req.body.password
            ? "expected a password"
            : !req.body.email
                ? "expected an email"
                : null;
        if (message) return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
        const user = await User.findOne({ where: { email: req.body.email.toLowerCase() } });
        if (!user) {
            return res.status(403).send("invalid credentials");
        }
        const validPassword = await user.checkPassword(req.body.password);
        if (validPassword) {
            const profile = await Profile.findOne({ where: { user_id: user.id }, include: { all: true } });
            const token = jwt.sign({ userId: user.id, profileId: profile.id }, process.env.JWT_SECRET, { expiresIn: "8h" });
            res.json({ token, profile });
        } else {
            return res.status(403).send("invalid credentials");
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

// token signin, validates token and keeps users signedin
router.get("/token/login", bearerAuth, async (req, res) => {
    try {
        const user = await User.findOne({ id: req.userId });
        if (!user) {
            return res.status(404).json({ message: "No user with that ID" });
        } else {
            const profile = await Profile.findOne({ where: { user_id: user.id }, include: { all: true } });
            const token = jwt.sign({ userId: user.id, profileId: profile.id }, process.env.JWT_SECRET, { expiresIn: "8h" });
            res.json({ token, profile });
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/logout", (req, res) => {
    // to do do remove token from local storage on front end and redirect;
    res.status(204).end()
        .catch((err) => {
            console.log("logout error: ", err);
            res.status(400).json(err);
        });
});

//put by id
router.put("/:id", bearerAuth, async (req, res) => {
    try {
        if (req.userId != req.params.id) {
            return res.status(403).json({ message: "not allowed" });
        }
        // to do check if the user on the pre hook is the old or the new
        // pre save probably new object
        const user = await User.findOneAndUpdate(
            { id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        !user ? res.status(404).json({ message: "No user with this id!" }) : res.json(user);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get by id
router.get("/:id", bearerAuth, async (req, res) => {
    try {
        if (req.userId != req.params.id) {
            return res.status(403).json({ message: "not allowed" });
        }
        const user = await User.findOne({ id: req.params.id });
        !user ? res.status(404).json({ message: "No user with that ID" }) : res.json(user);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;