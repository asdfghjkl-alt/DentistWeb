const router = require('express').Router();
let Doctor = require('../models/doctorModel');
const _ = require("lodash");

router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

router.post('/add', async (req, res) => {
  const newDoctor = new Doctor({ 
    doctorName: req.body.doctorName,
  });
  try {
    await newDoctor.save();
    res.json('new booking added.');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('server error');
  }
});

router.route('/:id').get((req, res) => {
  Doctor.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', async (req, res) => {
  try {
    const doctorUpdate = await Doctor.findById(req.params.id);
    doctorUpdate.doctorName = req.body.username;
    await doctorUpdate.save();
    res.json('Booking updated!');
  } catch (error) {
    console.log(error.mssage);
    res.status(500).send('server error');
  }
});

module.exports = router;
