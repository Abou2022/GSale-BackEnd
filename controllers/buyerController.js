const express = require("express");
const router = express.Router();
//need to double check the second line
const { User, Buyer } = require("../models/");
const bcrypt = require("bcrypt");

// find all
router.get("/", (req, res) => {
  Buyer.findAll({
    // include:[User]
  })
    .then((dbBuyers) => {
      res.json(dbBuyers);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// find one
router.get("/:id", (req, res) => {
  Buyer.findByPk(req.params.id, {})
    .then((dbBuyer) => {
      res.json(dbBuyer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// create Buyer
router.post("/", (req, res) => {
  console.log(req.body);
  const newBuyer = {
    ...req.body,
    //need to double check
    user_id: req.session.user.id,
  };
  Buyer.create(newBuyer)
    .then((newBuyer) => {
      req.session.Pet = {
        id: newBuyer.id,
        // need to double check
        Buyername: newBuyer.Buyername,
      };
      res.json(newBuyer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// update Buyer
router.put("/:id", (req, res) => {
  Buyer.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedBuyer) => {
      res.json(updatedBuyer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// delete a Pet
router.delete("/:id", (req, res) => {
  Buyer.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delBuyer) => {
      res.json(delBuyer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
