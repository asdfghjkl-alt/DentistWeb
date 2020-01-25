import React from "react";
import Title from "./Title"
import Footer from "./Footer"

function Porcelain() {
    return (
        <div>
            <Title 
                title = "Porcelain Veneers"
            />
            <div className = "pad">
                <div>
                    <div>
                        <h3><strong>Porcelain Veneers</strong></h3>
                        <p>Porcelain Veneers is the best way to have perfect teeth with beautiful natural smile you’ve always dreamt of.</p>
                        <p>Porcelain veneers are thin, tooth-colored shells that are crafted and shaped to bond to the front of your teeth. They can be used instead of a crown if your tooth is strong and healthy. Veneers are excellent for treating chipped or discolored teeth and will give a spectacular lift to your smile. They can also be used to eliminate gaps between the teeth and give you natural beautiful smile.</p>
                        <h5>What are Porcelain Veneers?</h5>
                        <p>Porcelain Veneers are thin layer (0.3mm – 0.5mm) shells that are bonded to the surface of your tooth. A thin sliver of porcelain resin is then permanently cemented to the front teeth. They are strong, look beautiful and natural. Porcelain veneers offer best approach to treatment of gap between teeth, chipped and broken teeth by bonding thin layer of shells over your existing teeth.</p>
                        <h5>Benefits of Porcelain Veneers</h5>
                        <p>Porcelain veneers are an ideal solution for number of dental conditions, restored damaged teeth and give them natural beautiful look. Unlike other dental treatments, Porcelain veneers need minimum amount of tooth reduction. Porcelain veneer’s strength is comparable to natural teeth  and  they  can last for many years without any problems.</p>
                        <p>We focus on patient care by delivering the necessary treatment without compromising our patients’ health.</p>
                        <p>We accept most insurance plans, Medicare , DentiCare, and a variety of payment plans</p>
                    </div>
                    <div>
                        <h3><strong>GLAMSMILE LIVERPOOL</strong></h3>
                        <h5>Safe And Painfree Porcelain Veneers</h5>
                        <p>GlamSmile is a revolutionary, painless, and truly affordable porcelain veneer solution for discolored, stained, damaged, worn or unsightly teeth. Now your beautiful new smile can be created by a GlamSmile certified dentist in less time than ever before with the Australia’s most affordable, minimal preparation porcelain veneers.</p>
                        <p>With our Glamsmile, Clear Correct and Whitening treatments you can have the dazzling smile you’ve always dreamed of – one that everyone notices for all the right reasons. Thanks to our in-house leading-edge technology, it’s no longer a long, drawn-out process to bring a clean new sparkle of confidence to previously discoloured teeth.</p>
                    </div>
                    <div style = {{margin: "7% 0"}}>
                        <h3><strong>Cosmetic dentistry isn’t only aesthetic</strong></h3>
                        <p>Many treatments can also improve the function and comfort of your teeth, by aligning your bite, or preventing teeth from wearing down too rapidly. Cosmetic dentistry can improve the appearance and functionality of your teeth, and can even change the structure of your face.</p>
                    </div>
                    <ul>
                        <li><strong>Remove old, unsightly fillings and dentures</strong> </li>
                        <li><strong>Improve your confidence</strong></li>

                    </ul>
                </div>
                <div className = "col-md-6" style = {{marginTop: "100px"}}>
                    <p><strong>Made with love by the Edward Company</strong></p>
                </div>
            </div>
            <hr></hr>
            <Footer />
        </div>
    )
}

export default Porcelain