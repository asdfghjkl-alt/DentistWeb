import React from "react";
import edward from "../images/Dentist-Office.jpg"

function Title(props) {
    return (
        <div className="about" style={{backgroundImage: `url(${edward})`}}>
            <div className = "image about" style={{padding: '10%'}} >
                <div style = {{color: 'white'}}>
                    <h1>{props.title}</h1>
                    <p>Home / {props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Title;