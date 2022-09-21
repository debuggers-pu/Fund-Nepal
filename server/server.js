require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const authRouter = require("./src/routes/auth-route");
const postRouter = require("./src/routes/post-route");
const morgan = require("morgan");

const corsOption = {
	credentials: true,
	origin: ["http://localhost:3000"],
};
connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("uploads"));
app.use(cors(corsOption));

app.get("/", (req, res) => {
	res.json({ message: "API RUNNING" });
});
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.listen(5000, () => {
	console.log("Server running in port 5000");
});
