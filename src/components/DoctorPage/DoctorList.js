import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Doctors from './Doctors';

function ExercisesList() {
  const [doctors, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resExs = await axios.get('/doctors');
        setUsers(resExs.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  async function deleteUsers(id) {
    try {
      await axios.delete('/doctors/' + id);
      setUsers(prevUs => {
        return prevUs.filter(el => el._id !== id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className = "pad">
      <div className = "boxshadow">
        <h3>Doctors</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(us => (
              <Doctors
                key={us._id}
                id={us._id}
                username={us.doctorName}
                deleteUs={deleteUsers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ExercisesList;