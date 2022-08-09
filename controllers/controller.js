const { User } = require("../models/users");

const controller = {
  myIndex(req, res) {
    res.render("index", { title: "Express" });
  },
  myUser(req, res) {
    res.json({
      name: "Rodrigo",
      age: 28,
    });
  },
 
  newUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(501).json({
        msg: "No se puede guardar el usuario en la DB, ese mail ya existe",
        err,
      });
    }
  },
};

module.exports = controller;
