import React from 'react';
import { Link } from 'react-router-dom';

function Doctors(props) {
  return (
    <tr>
      <td>{props.username}</td>
      <td><Link to={'/doctors/edit/' + props.id}>edit</Link></td>
      <td><Link to='#' onClick={() => props.deleteUs(props.id)}>delete</Link></td>
    </tr>
  );
}
export default Doctors;