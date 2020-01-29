import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

function BookingAdd() {
  const [newBooking, setNewBooking] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    DateOfBirth: new Date().setHours(9, 0, 0),
    address: '',
    description: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewBooking(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
  }

  function handleChangeMobile(event) {
    const { name, value } = event.target;
    setNewBooking(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
    var phoneNumber = newBooking.phone
      if (validator.isMobilePhone(phoneNumber) === false) {
        console.log("Wrong")
      } else {
        console.log("Valid Phone Number")
      }
    }

  function handleChangeDate(date) {
    setNewBooking(prevEx => {
      return {
        ...prevEx,
        date: date,
        timeSlot: date.getHours() + ':' + date.getMinutes()
      };
    });
  }

  let history = useHistory();
  async function onSubmit(event) {
    event.preventDefault();
    const Patient = {
      firstName: newBooking.firstName,
      lastName: newBooking.lastName,
      phone: newBooking.phone,
      DateOfBirth: newBooking.DateOfBirth,
      address: newBooking.address,
      phone: newBooking.phone,
      email: newBooking.email,
      description: newBooking.description,
    };
    console.log(Patient);

    try {
      await axios.post('/patients/add', Patient);
    } catch (error) {
      console.error(error);
    }
    history.push('/');
  }

  return (
    <div className = "pad">
      <div className = "boxshadow">
        <h3>Register Here:</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>First Name: </label>
            <input
              required
              type='text'
              className='form-control'
              name='firstName'
              value={newBooking.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Last Name: </label>
            <input
              required
              type='text'
              className='form-control'
              name='lastName'
              value={newBooking.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Phone Number: </label>
            <input
              required
              type='text'
              className='form-control'
              name='phone'
              value={newBooking.phone}
              onChange={handleChangeMobile}
            />
          </div>
          <div className='form-group'>
            <label>Date of Birth: </label>
            <div>
              <DatePicker
                selected={newBooking.date}
                onChange={handleChangeDate}
                timeIntervals={15}
                dateFormat='yyyy/MM/dd HH:mm'
                inline
              />
            </div>
          </div>
          {/* <div className='form-group'>
            <label>Time Slot:</label>
            <input
              type='text'
              className='form-control'
              name='timeslot'
              value={newBooking.timeslot}
              onChange={handleChange}
            />
          </div> */}
          <div className='form-group'>
            <label>Email: </label>
            <input
              type='email'
              className='form-control'
              name='email'
              value={newBooking.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Address: </label>
            <input
              type='text'
              className='form-control'
              name='address'
              value={newBooking.address}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <textarea
              type='text'
              rows='3'
              className='form-control'
              name='description'
              value={newBooking.description}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Register'

              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookingAdd;
