const router = require("express").Router();
const Post = require("../model/post-model");

const stripe = require("stripe")(
  "sk_test_51LkplHClMuxIph6nRuoVXkOG6SxDw78osa7pkdgH4uykvYxUhhs8jsfnN0qpsXyXHlPqe05ZO6f5SYLpxGClSRK700oS45RT8d"
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
    .then((customer) => {
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
    .then((result) => {
      res.status(200).json(result);
      Post.findOneAndUpdate(
        {
          _id: postid,
        },
        {
          amountCollected: amountCollected + parseInt(amount),
        },
        {
          upsert: true,
          new: true,
        }
      )
        .then(() => {
          return res.status(201).json({ result });
        })
        .catch((err) => {
          return res.status(404).json({ error: "User not found" });
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
