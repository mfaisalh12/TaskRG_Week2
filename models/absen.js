const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const absenSchema = new Schema(
	{
		nama: {
			type: String,
			required: true,
		},
		noabsen: {
			type: String,
			required: true,
		},
		kelas: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

const Absen = mongoose.model('Absen', absenSchema);
module.exports = Absen;
