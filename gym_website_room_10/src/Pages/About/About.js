import React from "react";
import Headings from "./Headings/Headings";
import MiddleSection from "./MiddleSection/MiddleSection";
import BottomSection from "./BottomSection/BottomSection";
import Videosection from "./VideoSection/Videosection";
import Background from "../../component/backround/Background"
import man from '../../component/images/man.jpg'

export default function About() {
  return (
    <div>
       <Background  
      url={man}
      heading="About Us"
      desc="To Know More About Us Visit"
      />
      <Headings />
      <MiddleSection />
      <BottomSection />
      <Videosection/>
    </div>
  );
}
