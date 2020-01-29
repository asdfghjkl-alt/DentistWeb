import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
  }
  return (
    <div>
      <div id = "navbar" style = {{zIndex: "1"}} className='navbar navbar-dark navbar-expand-lg' >
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-tooth fa-sm'></i> Epping
        </Link>
        <button style = {{width: "60px"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collpase navbar-collapse' id = "navbarNavDropdown">
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
          </ul>
          <ul className='navbar-nav navbar-right'>
            <li className = "navbar-item dropdown">
              <Link to = "/patients/registration" className = 'nav-link dropbtn'>
                Patients
              </Link>
              <div className = "dropdown-content">
                <a href="/patients/list">Patients List</a>
                <a href="/patients/registration">Patient Registration</a>
              </div>
            </li>
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
      </div>
      <nav style = {{position: "sticky"}} className='sticky navbar navbar-dark bg-info navbar-expand-lg' >
        <Link to='/' className='navbar-brand'>
          <i className='fas fa-tooth'></i> Epping
        </Link>
        <button style = {{width: "60px"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collpase navbar-collapse' id = "navbarNavDropdown">
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
          </ul>
          <ul className='navbar-nav navbar-right'>
            <li className = "navbar-item dropdown">
              <Link to = "/patients/registration" className = 'nav-link dropbtn'>
                Patients
              </Link>
              <div className = "dropdown-content">
                <a href="/patients/list">Patients List</a>
                <a href="/patients/registration">Patient Registration</a>
              </div>
            </li>
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
    </div>
  );
}
export default Navbar;
