const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
  
    lastName: { type: String, required: true },
  
    phone: { type: String, required: true, unique: true },
  
    email: String,
  
    DateOfBirth: { type: Date },
  
    address: { type: String },
  
    description: { type: String }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
