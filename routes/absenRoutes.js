const express = require('express');
const absenController = require('../controllers/absenController'); //connect to blogController in controllers

const router = express.Router();

// blog routes
router.get('/', absenController.absen_index);

// post request (create)
router.post('/', absenController.absen_create);
router.put('/', absenController.absen_edit);
// request to get id and render to details.ejs
router.get('/:id', absenController.absen_details);
// delete
router.delete('/:id', absenController.absen_delete);

module.exports = router;
