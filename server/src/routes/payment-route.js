const router = require("express").Router();
const Post = require("../model/post-model");

const stripe = require("stripe")(
	"sk_test_51LkrgoSFgx4gzLZV3uJxt0LMfzCzhzJYufdsLBAbUliFbRdU76DhFfsxbY4idTz1Hqhg4U3cv4bNWux2oQTpgulG00zKMatJhE"
);
const { v4: uuidv4 } = require("uuid");

router.post("/payment", (req, res) => {
	const { token, amount, postid } = req.body;
	const idempontencyKey = uuidv4();

	return stripe.customers
		.create({
			email: token.email,
			source: token.id,
		})
		.then(customer => {
			console.log("i am here");
			Post.findOne({ _id: postid }).then(project => {
				console.log("dsadasd");
				project.amountCollected = project.amountCollected + parseInt(amount);
			});
			stripe.charges.create(
				{
					amount: amount * 100,
					currency: "usd",
					customer: customer.id,
					receipt_email: token.email,
					description: `purchase of ${postid}`,
				},
				{ idempontencyKey: idempontencyKey }
			);
		})
		.then(result => {
			console.log("ainside pay");
			console.log(postid);
			res.status(200).json(result);
			Post.findOne({ _id: postid })
				.then(project => {
					console.log("dsadasd");
					project.amountCollected = project.amountCollected + parseInt(amount);

					return res.status(201).json({ result });
				})
				.catch(err => {
					console.log(err);
				});
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;
