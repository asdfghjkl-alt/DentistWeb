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
    const newDoc = await newDoctor.save();
    res.json('newDoc added' + newDoc);
  } catch (error) {
    console.log(error.mssage);
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

router.route('/update/:id').post((req, res) => {
  Doctor.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;

      user
        .save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400). json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
