import React from "react";
import MyButton from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <MyButton key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </MyButton>
      ))}
    </div>
  );
};

export default Socials;
