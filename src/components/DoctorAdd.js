import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DoctorAdd() {
  const [doctor, setDoctor] = useState({
    doctorName: '',
    position: ''
  });
  function onChange(event) {
    const { name, value } = event.target;
    setDoctor(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
  }

  let history = useHistory();
  async function onSubmit(event) {
    event.preventDefault();
    const doctors = {
      doctorName: doctor.doctorName,
      position: doctor.position
    };
    try {
      await axios.post('/doctors/add', doctors);
    } catch (error) {
      console.error(error);
    }
    setDoctor({
      doctorname: '',
      position: ''
    });
    history.push('/');
  }

  return (
    <div style = {{padding: "2%"}}>
      <h3>Create New Doctor</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Doctorname: </label>
          <input
            type='text'
            required
            name = "doctorName"
            className='form-control'
            value={doctor.doctorName}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Add Doctor' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
}
export default DoctorAdd;
