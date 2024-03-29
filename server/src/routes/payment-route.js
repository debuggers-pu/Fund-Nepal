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
			stripe.charges.create(
				{
					amount: amount * 100,
					currency: "usd",
					customer: customer.id,
					receipt_email: token.email,
					description: `purchase of ${postid}`,
				},
				{ idempontencyKey }
			);
		})
		.then(result => {
			res
				.status(200)
				.json(result)
				// Post.findOneAndUpdate(
				// 	{
				// 		_id: postid,
				// 	},
				// 	{
				// 		amountCollected: parseInt(amount),
				// 	},
				// 	{
				// 		upsert: true,
				// 		new: true,
				// 	}
				// )
				.catch(err => {
					return res.status(404).json({ error: "User not found" });
				});
		})
		.catch(err => console.log(err));
});

router.post("/pay", async (req, res) => {
	const { amount, postid } = req.body;
	await Post.findOneAndUpdate(
		{ _id: postid },
		{ amountCollected: amount },
		{ upsert: true, useFindAndModify: false, new: true }
	);
	res.status(200).json({
		message: "Payment Successfull",
	});
});

module.exports = router;
