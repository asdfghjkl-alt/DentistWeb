import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import bookingList from './components/BookingsPage/BookingList';
import bookingEdit from './components/BookingsPage/BookingEdit';
import bookingAdd from './components/BookingsPage/BookingAdd';
import doctorAdd from './components/DoctorPage/DoctorAdd';
import contact from './components/Contact';
import DoctorList from './components/DoctorPage/DoctorList';
import DoctorEdit from './components/DoctorPage/DoctorEdit';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import PatientsList from "./components/PatientsPage/PatientsList";
import PatientRegistration from "./components/PatientsPage/PatientRegistration"
import OurClinic from "./components/AboutPage/OurClinic";
import OurTech from "./components/AboutPage/OurTech";
import Invisalign from "./components/Offers/Invisalign";
import Offers from "./components/Offers/Offers";
import DentalPlan from "./components/Offers/DentalPlan";
import NewPatient from "./components/Offers/NewPatient";
import Services from "./components/ServicesPage/Services";
import GumDisease from "./components/ServicesPage/GumDisease";
import ChildrenDentist from "./components/ServicesPage/ChildrenDentist";
import Orth from "./components/ServicesPage/Orth";

function App() {
  return (
    <Router>
      <div>
        <div style = {{color: "white", backgroundColor: "black", textAlign: "center", zIndex: "1"}}>
          Epping Dental Clinic
        </div>
        <Navbar style = {{position: "sticky"}} />
        <Route exact path='/' component={Home} />
        <Route exact path='/bookings' component={bookingList} />
        <Route exact path='/bookings/add' component={bookingAdd} />
        <Route exact path='/bookings/edit/:id' component={bookingEdit} />
        <Route exact path='/doctors/add' component={doctorAdd} />
        <Route exact path='/contact' component={contact} />
        <Route exact path='/doctors' component={DoctorList} />
        <Route exact path='/doctors/edit/:id' component={DoctorEdit} />
        <Route exact path='/about' component = {About} />
        <Route exact path = "/patients/list" component = {PatientsList} />
        <Route exact path = "/patients/registration" component = {PatientRegistration} />
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
};

export default App;