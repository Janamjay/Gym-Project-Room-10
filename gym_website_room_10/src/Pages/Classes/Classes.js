import React from "react";
import Background from "../../component/backround/Background";
import cls from '../../component/images/class.jpg'

export default function Classes() {
  return (
    <div>
      <Background
        url={cls}
        heading="Classes"
        desc="Join Our Classes to be Fit "
      />
      <h1>this is classes</h1>
    </div>
  );
}
