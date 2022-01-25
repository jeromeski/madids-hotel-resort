const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

// / db connection
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true
	})
	.then(() => console.log("DB Connected"))
	.catch((err) => console.log("DB Connection Error: ", err));

// middlewares
app.use(cors());
app.use(morgan("dev"));

// routes
const roomRoute = require("./routes/room");

app.use("/api/rooms", roomRoute);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
