require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;

const { User, Post, Ingredients } = require("./models/tables");
const { sequelize } = require("./util/database");
const { register, login } = require("./controllers/authCtrl");
const { addPost } = require("./controllers/postCtrl");

const app = express();

app.use(express.json());
app.use(cors());

User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Ingredients);
Ingredients.belongsTo(Post);

app.post("/api/register", register);
app.post("/api/login", login);

app.post("/api/post", addPost);
app.post("/api/ingredients");

sequelize
  .sync()
  // sequelize.sync({force: true})
  .then(() => {
    app.listen(SERVER_PORT, () => console.log(`server up on ${SERVER_PORT}`));
  })
  .catch((err) => console.log(err));

//ask about the hasMany being correct
