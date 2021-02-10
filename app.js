const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Absen = require('./models/absen');
const { render } = require('ejs');
const methodOverride = require('method-override');
// const absenRoutes = require('./routes/absenRoutes');
// ! MVC error, so i decided to use crud without MVC & also still keep the mvc files

const mongooseURI =
	'mongodb+srv://ical:ical123@absen.p0fyh.mongodb.net/data_absen?retryWrites=true&w=majority';
mongoose
	.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(4444)) // listen for requests
	.catch((err) => console.log(err));

app.set('view engine', 'ejs'); // view engine
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	Absen.find()
		.then((result) => {
			res.render('index', { title: 'Data Siswa', absens: result });
		})
		.catch((err) => {
			console.log(err);
		});
});
app.get('/absens', (req, res) => {
	res.render('absens', { title: 'Form Data SIswa' });
});
app.post('/absens', (req, res) => {
	const absen = new Absen(req.body);

	absen
		.save()
		.then((result) => {
			res.redirect('/');
		})
		.catch((err) => {
			console.log(err);
		});
});

app.delete('/:id', (req, res) => {
	const id = req.params.id;
	Absen.findByIdAndDelete(id)
		.then((result) => {
			res.redirect('/');
		})
		.catch((err) => {
			console.log(err);
		});
});

app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
