import React from 'react';
import { Link } from 'react-router-dom';
import edward from "../images/IMG_2504.jpeg"
import person from "../images/lady-img.jpg"
import group from "../images/IMG_2385.jpeg"

function About() {
  return (
    <div>
      <div className="about" style={{backgroundImage: `url(${edward})`}}>
          <div className = "image about" style={{padding: '10%'}} >
              <h1>About Us</h1>
              <p>Home / About us</p>
          </div>
      </div>
      <div className = "description">
        <div style = {{fontSize: '150%'}}>
          <p>Edward Dental is <strong>completely about relationships, building relationships with you</strong>, our patient. We really spend most of our time trying to get to know you and what it is you are here for.</p>
          <p></p>
          <p>We have your best interest at heart. We are not a corporate or part of an insurance company. We are a private practice: a husband and wife team with our fellow associates. We only answer to you not to a board of directors or the insurance companies.</p>
          <p></p>
          <p>When you are a patient at our practice you become <strong>part of our family.</strong></p>
          <p></p>
          <p><strong>Some of our long term patients are dental-phobic, they return because our staff are understanding and reassuring we provide gentle dental care.</strong></p>
          <p><strong>At Rawson Dental we want to exceed your expectations.</strong> We transform teeth into happy healthy confident smiles and thereby <strong></strong>changing people’s lives.</p>
          <img src = {group} style = {{padding: "50%"}, {width: '30%'}}></img>
        </div>
        <div className = "doctors">
          <h1 style = {{marginBottom: '30px'}}>Doctors: </h1>
          <img src = {person} className = "icon" style = {{borderRadius: '50%'}} />
          <div style = {{float: 'right'}, {fontSize: '120%'}}>
            <h1>Doctor (insert name here)</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;