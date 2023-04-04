const {Post} = require("../models/tables");

module.exports = {
  addPost: async (req, res) => {
      try{
          const {recipeName, notes, imageUrl, userId} = req.body;
          console.log(req.body)
      console.log("addPost");

      await Post.create({
        recipeName,
        notes,
        imageUrl,
        userId  
      });

      res.sendStatus(200);
    } catch(err){
      console.log(err);
      res.status(500).send("Post was not added correctly.");
    }
  },

  getPost: async (req, res) => {
    try {
    const {userId} = req.params
    const post = await Post.findAll({where: {userId}})
    res.status(200).send({post})
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
   }
 },

 deletePost: async( req, res) => {
  try {
     const {id} = req.params
      await Post.destroy({where: {id}})
    res.sendStatus(200)

  } catch(err) {
    console.log(err)
    res.status(400).send("unable to delete post")
  }
 }
};
