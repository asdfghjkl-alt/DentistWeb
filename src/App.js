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
import Porcelain from "./components/Porcelain"
import PatientsList from "./components/PatientsList"
import OurClinic from "./components/OurClinic"
import OurTech from "./components/OurTech"
import Invisalign from "./components/Invisalign"
import Offers from "./components/Offers"
import DentalPlan from "./components/DentalPlan"
import NewPatient from "./components/NewPatient"
import Services from "./components/Services"
import GumDisease from "./components/GumDisease"
import ChildrenDentist from "./components/ChildrenDentist"
import Orth from "./components/Orth"

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
        <Route exact path = '/services/porcelain' component = {Porcelain} />
        <Route exact path = "/patients" component = {PatientsList} />
        <Route exact path = "/about/team" component = {OurClinic} />
        <Route exact path = "/about/ourtech" component={OurTech} />
        <Route exact path = "/offers/invisalign" component = {Invisalign} />
        <Route exact path = "/offers" component = {Offers} />
        <Route exact path = "/offers/plan" component = {DentalPlan} />
        <Route exact path = "/offers/patient" component = {NewPatient} />
        <Route exact path = "/services" component = {Services} />
        <Route exact path = "/services/fillings" component = {GumDisease} />
        <Route exact path = "/services/child" component = {ChildrenDentist} />
        <Route exact path = "/services/orthodontics" component = {Orth} />
      </div>
    </Router>
  );
}
export default App;