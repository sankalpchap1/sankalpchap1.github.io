import React from "react";
// import styles from "../../styles/globals.css";

const Experience = ({ dates, location, position, company, points }) => {
  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div>
        <div className="wrapper ext-lg font-bold">
          <div className="left">{position}</div>
          <div className="right">{dates.start} - {dates.end}</div>
        </div>
        <div className="wrapper opacity-50">
          <div className="left">{company}</div>
          <div className="right">{location}</div>
        </div>
        {points && points.length > 0 && (
          <ul className="list-disc">
            {points.map((point, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Experience;
