import React from "react";
import Headings from "./Headings/Headings";
import MiddleSection from "./MiddleSection/MiddleSection";
import BottomSection from "./BottomSection/BottomSection";
import Videosection from "./VideoSection/Videosection";

export default function About() {
  return (
    <div>
      <Headings />
      <MiddleSection />
      <BottomSection />
      <Videosection/>

      <h1>This is about page</h1>
    </div>
  );
}
