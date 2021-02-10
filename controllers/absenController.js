const Absen = require('../models/absen');

const getindex = (req, res) => {
	Absen.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render('absens', { title: 'All Absen', absen: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

// details
const absen_details = (req, res) => {
	const id = req.params.id;
	Absen.findById(id)
		.then((result) => {
			res.render('absens/details', { absen: result, title: 'Absen Details' });
		})
		.catch((err) => {
			console.log(err);
		});
};

// create
const absen_create = (req, res) => {
	const absen = new Absen(req.body);

	absen
		.save()
		.then((result) => {
			res.redirect('/absens');
		})
		.catch((err) => {
			console.log(err);
		});
};

// delete
const absen_delete = (req, res) => {
	const id = req.params.id;

	Blog.findByIdAndDelete(id)
		.then((result) => {
			res.json({ redirect: '/absens' });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	absen_index,
	absen_details,
	absen_create,
	absen_delete,
};
