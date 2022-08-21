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

  verUser: async (req, res) => {
    const users = await User.find();
    res.json({ users });
  },

  eliminarUser: async (req, res) => {
    try {
        const eliminarUser = await Checkout.findByIdAndDelete(req.params.id);
        res.stauts(201).json({ mg: "usuario eliminado", eliminarUser });
      }
     catch (err) {
      res.status(501).json({ msg: "no se puedo eliminar al usuario", err });
    }
  },
  
};

module.exports = controller;
