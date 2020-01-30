import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router';

function EditUser() {
  const [user, setUser] = useState({
    username: '',
  });

  let { id } = useParams();
  console.log(id);

  function onChange(event) {
    const { name, value } = event.target;
    setUser(prevEx => {
      return {
        ...prevEx,
        [name]: value
      };
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUs = await axios.get('/doctors/' + id);
        setUser(prevEx => {
          return {
            ...prevEx,
            username: resUs.data.doctorName,
          };
        });
      } catch (error) {
        console.error(error);
      }

      try {
        const resUsers = await axios.get('/doctors');
        if (resUsers.data.length > 0) {
          setUser(prevEx => {
            return {
              ...prevEx,
              doctors: resUsers.data.map(user => user.username)
            };
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const updatedEx = {
      doctorName: user.username,
    };
    await axios.post('/doctors/update/' + id, updatedEx);

    window.location = '/doctors';
  }

  return (
    <div className = "pad">
      <div className = "boxshadow">
        <h3>Edit Doctor</h3>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label>Doctorname: </label>
            <input
              type='text'
              required
              className='form-control'
              name='doctorName'
              value={user.username}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Update Doctor' className='btn btn-primary' />
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditUser;