import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";

import ProductCard from "../Pages/ProductCard"

import Testimonials from "./Testimonials";
import AutoSlider from './../Slider/Slider3';
import TopProducts from "./TopProducts";
import KrishnaPoultry from "./KrishnaPoultry";


const Home = () => {
  return (
    <div>
  
 
      <AutoSlider/>
      <KrishnaPoultry/>

      <TopProducts/>

      <ProductCard/>
      <SaiKrishnaIndustries/>
      <Testimonials/>

    </div>
  );
};

export default Home;
