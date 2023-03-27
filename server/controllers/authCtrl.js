const { User } = require("../models/tables");
const { SECRET } = process.env;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (username, id) => {
  return jwt.sign({username, id}, SECRET, { expiresIn: "2 days" });
};

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res.status(400).send('Username is taken');
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
          username,
          hashedPass: hash
        });

        const token = createToken(newUser.username, newUser.id);
        const exp = Date.now() + 1000 * 60 * 60 * 48;

        res.status(200).send({
          username: newUser.usename,
          userId: newUser.id,
          token,
          exp,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("Error in register");
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username } });

      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if (isAuthenticated) {
          const token = createToken(foundUser.username, foundUser.userId);
          const exp = Date.now() + 1000 * 60 * 60 * 48;

          res.status(200).send({
            username: foundUser.username,
            userId: foundUser.id,
            token,
            exp,
          });
        } else {
          res.status(400).send("Password is incorrect");
        }
      } else {
        res.status(400).send("That username does not exist");
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("Error in login");
    }
  },
};
