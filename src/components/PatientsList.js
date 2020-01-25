import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Patients from './Patients';

function PatientsList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookings = await axios.get('/bookings');
        setBookings(bookings.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style = {{padding: "2%"}}>
      <h3>Logged Patient</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Patient Name</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(ex => (
            <Patients
              key={ex._id}
              id={ex._id}
              username={ex.patientPhone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PatientsList;
