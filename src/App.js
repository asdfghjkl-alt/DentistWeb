import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import bookingList from './components/BookingList';
import bookingEdit from './components/BookingEdit';
import bookingAdd from './components/BookingAdd';
import doctorAdd from './components/DoctorAdd';
import contact from './components/Contact';
import DoctorList from './components/DoctorList';
import DoctorEdit from './components/DoctorEdit';
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <Router>
      <div>
        <Navbar style = {{position: "sticky"}} />
        <br />
        <Route exact path='/' component={Home} />
        <Route exact path='/bookings' component={bookingList} />
        <Route exact path='/bookings/add' component={bookingAdd} />
        <Route exact path='/bookings/edit/:id' component={bookingEdit} />
        <Route exact path='/doctors/add' component={doctorAdd} />
        <Route exact path='/contact' component={contact} />
        <Route exact path='/doctors' component={DoctorList} />
        <Route exact path='/doctors/edit/:id' component={DoctorEdit} />
        <Route exact path='/about' component = {About} />
      </div>
    </Router>
  );
}
export default App;
