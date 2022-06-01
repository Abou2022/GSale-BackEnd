const express = require("express");
const router = express.Router();
//need to double check the second line
const { User, Comment } = require("../models/");
const bcrypt = require("bcrypt");

// find all
router.get("/", (req, res) => {
  Comment.findAll({
    // include:[User]
  })
    .then((dbComments) => {
      res.json(dbComments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// find one
router.get("/:id", (req, res) => {
  Comment.findByPk(req.params.id, {})
    .then((dbComment) => {
      res.json(dbComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// create Comment
router.post("/", (req, res) => {
  console.log(req.body);
  const newComment = {
    ...req.body,
    //need to double check
    user_id: req.session.user.id,
  };
  Comment.create(newComment)
    .then((newComment) => {
      req.session.Pet = {
        id: newComment.id,
        // need to double check
        Commentname: newComment.Commentname,
      };
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// update Comment
router.put("/:id", (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedComment) => {
      res.json(updatedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// delete a Pet
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delComment) => {
      res.json(delComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;
