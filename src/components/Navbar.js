import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav style = {{position: "sticky"}} className='navbar navbar-dark bg-info navbar-expand-lg sticky'>
      <Link to='/' className='navbar-brand'>
        <i class='fas fa-tooth'></i>
      </Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/bookings' className='nav-link'>
              Bookings
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/doctors/add' className='nav-link'>
              Add Doctor
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/doctors' className='nav-link'>
              Doctors
            </Link>
          </li>
          <li className='navbar-item dropdown'>
            <Link to='#' className='nav-link dropbtn'>
              Services
            </Link>
            <div className = "dropdown-content">
              <a href="#">Porcelain Veneers</a>
              <a href="#">General Dentistry</a>
              <a href="#">Root Canal</a>
            </div>
          </li>
          <li>
            <Link to = "/about" className='nav-link'>
              About
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav navbar-right'>
          <li className='navbar-item dropdown'>
            <Link to='/contact' className='nav-link dropbtn'>
              Add Booking
            </Link>
            <div className = "dropdown-content">
              <a href="/bookings/add">Online Booking</a>
              <a href="/contact">Contact Us</a>
            </div>
          </li>
          <li className='navbar-item'>
            <a className = "nav-link" href = "tel:98693003">9869 3003</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
