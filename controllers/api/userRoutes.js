'use strict';

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User, Profile } = require('../../models');

// post
router.post('/', async (req, res) => {
    try {
        const message = !req.body.password ? 'expected a password'
            : !req.body.email ? 'expected an email'
                : null;
        if (message)
            return res.status(400).json(`BAD REQUEST ERROR: ${message}`);
        const user = await User.create(req.body);
        const profile = await Profile.create({ userId: user._id, email: user.email });
        const token = jwt.sign({ userId: user._id, profileId: profile._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
        res.json({ token, profile });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
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
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    // to do do remove token from local storage in front end and redirect;
    res.status(204).end()
        .catch(errr => {
            console.log("logout error: ", err);
            res.status(400).json(err);
        });
});

//put by id
router.put('/:id', async (req, res) => {
    try {
        // to do check if the user on the pre hook is the old or the new
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        // pre save probably new object
        !user ? res.status(404).json({ message: 'No user with this id!' }) : res.json(user);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

// get by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
        console.log("err: ", err);
        res.status(500).json(err);
    }
});

module.exports = router;