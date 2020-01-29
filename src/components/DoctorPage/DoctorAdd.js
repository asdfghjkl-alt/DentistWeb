import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DoctorAdd() {
  const [doctor, setDoctor] = useState({
    doctorName: '',
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
      doctorName: doctor.doctorName
    };
    try {
      await axios.post('/doctors/add', doctors);
    } catch (error) {
      console.error(error);
    }
    history.push('/doctors');
  }

  return (
    <div className= "pad">
      <div className = "boxshadow">
        <h3>Create New Doctor</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Doctor name: </label>
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
    </div>
  );
}
export default DoctorAdd;
