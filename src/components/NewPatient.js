import React from "react";
import Title from "./Title"
import NewPatientPart from "./NewPatientPart"

function NewPatient() {
    return (
        <div>
            <Title
                title = "New Patient Special"
            />
            <NewPatientPart />
        </div>
    )
}

export default NewPatient