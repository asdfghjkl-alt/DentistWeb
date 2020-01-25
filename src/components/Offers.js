import React from "react";
import Title from "./Title"
import InvisalignPart from "./InvisalignPart"
import DentalPlanPart from "./DentalPlanPart"
import NewPatientPart from "./NewPatientPart"

function Offers() {
    return (
        <div>
            <Title 
                title = "Special Offers"
            />
            <InvisalignPart />
            <DentalPlanPart />
            <NewPatientPart />
        </div>
    )
}

export default Offers;