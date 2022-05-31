'use strict';

const { Buyer } = require('../models');

module.exports = {
	// Get all buyers
	getBuyers(req, res) {
		Buyer.find()
			.then(buyers => res.json(buyers))
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	// Get a single buyer
	getSingleBuyer(req, res) {
		Buyer.findOne({ _id: req.params.buyerId })
			.then(buyer => {
				console.log("buyer: ", buyer);
				!buyer ? res.status(404).json({ message: 'No buyer with that ID' }) : res.json(buyer);
			})
			.catch((err) => {
				console.log(err);
				return res.status(500).json(err);
			});
	},
	// create a new buyer
	createBuyer(req, res) {
		Buyer.create(req.body)
			.then((buyer) => res.json(buyer))
			.catch((err) => res.status(500).json(err));
	},
	// Delete a buyer and remove them from the thought
	deleteBuyer(req, res) {
		Buyer.findOneAndRemove({ _id: req.params.buyerId })
			.then(async (buyer) =>
				!buyer ? res.status(404).json({ message: 'No such buyer exists' }) : await Thought.remove({ buyername: buyer.buyername })
			)
			.then(thought =>
				!thought ? res.status(404).json({ message: 'Buyer deleted, but no thoughts found' }) : res.json({ message: 'Buyer and associated thoughts deleted!' })
			)
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	// update buyer 
	updateBuyer(req, res) {
		Buyer.findOneAndUpdate(
			{ _id: req.params.buyerId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((buyer) =>
				!buyer ? res.status(404).json({ message: 'No buyer with this id!' }) : res.json(buyer)
			)
			.catch((err) => res.status(500).json(err));
	}
};