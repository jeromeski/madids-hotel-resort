const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
	{
		unitName: {
			type: String,
			required: true
		},
		qty: {
			type: Number,
			required: true
		},
		roomType: {
			type: String,
			required: true
		},
		maxPeople: {
			type: Number,
			required: true
		},
		isFeatured: {
			type: Boolean,
			default: false
		},
		rackRate: {
			type: Number,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const roomModel = mongoose.model("Rooms", roomSchema);

module.exports = roomModel;
