// components/Home/Home.jsx
import React from "react";
import SliderComponent from "../Slider/SliderComponent";
import InfoSection from './InfoSection';
import FoundationFacts from "./FoundationFacts";
import PartnersSection from "./PartnerSection";
import IdeasSection from "./IdeasSection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Slider */}
      <div className="w-full h-screen bg-gray-900">
        <SliderComponent />
      </div>

      {/* Below content */}
      <div className="p-6">
      <InfoSection/>

      {/* foundation */}
      <FoundationFacts/>

      <PartnersSection/>

      <IdeasSection/>

    
      </div>
        <Footer/>
    </div>
  );
};

export default Home;
