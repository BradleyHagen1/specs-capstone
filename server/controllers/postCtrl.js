const {Post} = require("../models/tables");

module.exports = {
  addPost: async (req, res) => {
      try{
          const {recipeName, notes, imageUrl, userId } = req.body;
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
};
