const Post = require("../model/post-model");

class PostController {
  //Adding post
  async addpost(req, res) {
    try {
      const {
        userid,
        title,
        description,
        category,
        amount,
        comment,
        likes,
        amountCollected,
      } = req.body;
      const image = req.file?.path;
      const _post = new Post({
        title,
        description,
        userid,
        image,
        category,
        amount,
        comment,
        likes,
        amountCollected,
      });
      const post = await Post.findOne({ title: title });
      if (post) {
        res.status(500).json({
          message: "Title already exist",
        });
        return;
      }

      const SavedPost = await _post.save();
      res.json(SavedPost);
      console.log(SavedPost);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }

  //TO retrive all posts

  async getpost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }

  async getpostbyid(req, res) {
    try {
      const { id } = req.body;
      const post = await Post.findOne({ _id: id });
      if (post) {
        res.status(200).json({ post });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
}
module.exports = new PostController();
