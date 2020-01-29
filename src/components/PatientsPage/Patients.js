import React from 'react';
import { Link } from 'react-router-dom';

function Booking(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.DateOfBirth}</td>
      <td>{props.address}</td>
      <td>{props.description}</td>
      <td>
        <Link to='#' onClick={() => props.deletePatients(props.id)}>
          delete
        </Link>
      </td>
    </tr>
  );
}
export default Booking;