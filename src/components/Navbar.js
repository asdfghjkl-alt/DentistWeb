import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style = {{position: "sticky"}} className='navbar navbar-dark bg-info navbar-expand-lg sticky'>
      <Link to='/' className='navbar-brand'>
        <i class='fas fa-tooth'></i> Epping
      </Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className = "navbar-item dropdown">
            <Link to = "/about" className='nav-link dropbtn'>
              About
            </Link>
            <div className = "dropdown-content">
              <a href="/about">Our Clinic</a>
              <a href="/about/team">Meet Our Team</a>
              <a href = "/about/ourtech">Our Tech</a>
            </div>
          </li>
          <li className = "navbar-item dropdown">
            <Link to = "/offers" className='nav-link dropbtn'>
              Offers
            </Link>
            <div className = "dropdown-content">
              <a href="/offers/invisalign">Invisalign</a>
              <a href="/offers/plan">National Dental Plan</a>
              <a href = "/offers/patient">New Patient Special</a>
              <a href = "/offers/snore">Temporary Snoring</a>
              <a href = "/offers/cdbs">Child Dental Benefits Schedule (CDBS)</a>
            </div>
          </li>
          <li className = "navbar-item dropdown">
            <Link to = "/services" className='nav-link dropbtn'>
              Services
            </Link>
            <div className = "dropdown-content">
              <a href="/services/fillings">Prevention, Fillings and Gum Disease</a>
              <a href="/services/child">Children's Dentistry</a>
              <a href = "/services/orthodontics">Orthodontics</a>
            </div>
          </li>
          <li>
            <Link to = "/patients" className = 'nav-link'>
              Patients
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
                <Link to='/bookings'>Bookings</Link>
              <a href="/contact">Contact Us</a>
            </div>
          </li>
          <li className='navbar-item dropdown'>
            <Link to='/about' className='nav-link dropbtn'>
              Doctors
            </Link>
            <div className = "dropdown-content">
              <Link to='/doctors'>Doctors</Link>
              <Link to='/doctors/add'>Add Doctor</Link>
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
