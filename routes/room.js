const express = require("express");
const router = express.Router();

const Room = require("../models/room");

router.get("/getallrooms", async function (req, res, next) {
	try {
		const rooms = await Room.find({});
		return res.json({ rooms });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
