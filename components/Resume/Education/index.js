import React from "react";
import { useTheme } from "next-themes";

const Education = ({
  name,
  degree,
  dates,
  location,
  courses,
  introduction,
  files,
}) => {
  const { theme, setTheme } = useTheme();
  const linkClassName =
    theme === "dark" ? "download-link-dark" : "download-link-light";
  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div>
        <div className="wrapper ext-lg font-bold">
          <div className="left">{name}</div>
          <div className="right">
            {dates.start} - {dates.end}
          </div>
        </div>
        <div className="wrapper opacity-50">
          <div className="left">{degree}</div>
          <div className="right">{location}</div>
        </div>
        <div>
          <p className="italic-text">{introduction}</p>
        </div>
        {courses && courses.length > 0 && (
          <div>{`Coursework: ` + courses.join(", ")}</div>
        )}
        {files && files.length > 0 && (
          <div>
            {files.map(({ name, path }, index) => (
              <span key={index}>
                <a href={path} download className={linkClassName}>
                  {name}
                </a>
                {index !== files.length - 1 && " | "}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
