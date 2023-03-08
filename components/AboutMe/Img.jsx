import React from "react";

const Img = (props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} className={props.className} />
  );
};

export default Img;
