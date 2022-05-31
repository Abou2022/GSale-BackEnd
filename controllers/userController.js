'use strict';

const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then(users => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('_id username email friendCount')
            .populate({ path: 'thoughts', select: '_id thoughtText username createdAt reactions __v reactionCount', populate: { path: 'reactions', select: 'reactionId createdAt _id reactionBody username' } })
            .populate({ path: 'friends', select: 'thoughts friends _id username email __v friendCount' })
            .then(user => {
                console.log("user: ", user);
                !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Delete a user and remove them from the thought
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then(async (user) =>
                !user ? res.status(404).json({ message: 'No such user exists' }) : await Thought.remove({ username: user.username })
            )
            .then(thought =>
                !thought ? res.status(404).json({ message: 'User deleted, but no thoughts found' }) : res.json({ message: 'User and associated thoughts deleted!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // update user 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user ? res.status(404).json({ message: 'No user with this id!' }) : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then(async user => {
                if (!user) {
                    res.status(404).json({ message: 'No user with this id!' })
                } else {
                    const friend = await User.findOneAndUpdate(
                        { _id: req.params.friendId },
                        { $addToSet: { friends: req.params.userId } },
                        { runValidators: true, new: true }
                    )
                    !friend ? res.status(404).json({ message: 'No friend with this id!' }) : res.json(user)
                }
            })
            .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then(async user => {
                if (!user) {
                    res.status(404).json({ message: 'No user with this id!' })
                } else {
                    const friend = await User.findOneAndUpdate(
                        { _id: req.params.friendId },
                        { $pull: { friends: req.params.userId } },
                        { runValidators: true, new: true }
                    )
                    !friend ? res.status(404).json({ message: 'No friend with this id!' }) : res.json(user)
                }
            })
            .catch((err) => res.status(500).json(err));
    }
};