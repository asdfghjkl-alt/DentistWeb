import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Patients from './Patients';

function BookingList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patients = await axios.get('/patients');
        setPatients(patients.data);
        console.log(patients.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  async function deletePatients(id) {
    try {
      await axios.delete('/patients/' + id);
      setPatients(prevBk => {
        return prevBk.filter(el => el._id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className = "pad">
      <div>
      <h3>Logged Patients</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(ex => (
              <Patients
                key={ex._id}
                id={ex._id}
                firstName={ex.firstName}
                lastName={ex.lastName}
                email = {ex.email}
                phone = {ex.phone}
                DateOfBirth={Date(ex.date).substring(0, 15)}
                address={ex.address}
                description={ex.description}
                deletePatients={deletePatients}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BookingList;
