import React from 'react';
import { Link } from 'react-router-dom';

function Doctors(props) {
  return (
    <tr>
      <td>{props.username}</td>
    </tr>
  );
}
export default Doctors;