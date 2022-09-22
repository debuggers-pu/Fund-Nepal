const Post = require("../model/post-model");

class PostController {
	//Adding post
	async addpost(req, res) {
		try {
			const {
				userid,
				title,
				description,
				image,
				category,
				amount,
				comment,
				likes,
			} = req.body;
			const _post = new Post({
				title,
				description,
				userid,
				image,
				category,
				amount,
				comment,
				likes,
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
			res.json(posts);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Some Error occured");
		}
	}
}
module.exports = new PostController();
