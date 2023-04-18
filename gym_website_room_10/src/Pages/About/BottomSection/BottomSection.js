import React from "react";
import styled from "./BottomSection.module.css";

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
    </>
  );
}
