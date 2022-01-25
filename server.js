const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middlewares
app.use(morgan("dev"));

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
