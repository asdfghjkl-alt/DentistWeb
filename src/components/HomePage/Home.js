import React from "react";
import Desc from "./Desc"
import Why from "./Why"
import Footer from '../Footer'
import Carousel from "./Carousel"


function Home() {
  return (
    <div>
      <Carousel />
      <Desc />
      <Why />
      <Footer />
    </div>
  );
}

export default Home;
