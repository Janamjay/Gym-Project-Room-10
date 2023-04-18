import React from "react";
import styled from "./BottomSection.module.css";
import ReactPlayer from "react-player";

export default function BottomSection() {
  return (
    <>
      <div className={styled.content}>
        <div className={styled.image}>
          <img
            src="https://fitness-html.eplug-ins.com/img/client/client_image.jpg"
            alt="pic"
          ></img>
        </div>

        <div className={styled.image_heading}>
          <h1>
            JONT HENRY-CEO B&C "Tempor malesuada at id nisi. Etiam nec ia massa.
            Nullam quis ultrices felis. Bitur dum at diam id finibus. Quisque
            finibus laoreet nibh, at ultrieces risus"
          </h1>
        </div>
      </div>

      {/* <div className={styled.video_heading}>
        <h1>Our Facilities</h1>
        <h3>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
          non
        </h3>
      </div> */}

      <div className={styled.video_content}>
        <ReactPlayer controls url="https://youtu.be/1Bj5PPxgEwo" />
      </div>
    </>
  );
}
