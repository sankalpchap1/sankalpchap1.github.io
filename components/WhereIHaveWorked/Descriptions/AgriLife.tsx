import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function AgriLife() {
  const tasks = [
    {
      text: "Key contributor to the Lacewing Digital Library and Texas A&M University Insect Collection project in collaboration with Prof. John Oswald, within the esteemed Entomology Department.",
      keywords: [
        "Prof. John Oswald",
        "Lacewing Digital Library",
        "Texas A&M University Insect Collection",
      ],
    },
    {
      text: "Transformed a legacy .NET Framework application by migrating it to cutting-edge technologies like ReactJS and NodeJS, ensuring seamless deployment on the university server.",
      keywords: [".NET Framework", "ReactJS", "NodeJS"],
    },
    {
      text: "Streamlined database management by successfully merging two separate SQL Server databases into a unified system, resulting in improved server efficiency and optimized frontend API communication.",
      keywords: ["Streamlined database management", "SQL Server"],
    },
    {
      text: "Identified and addressed multiple security vulnerabilities, while implementing a robust layer of University Single Sign-On Authentication, ensuring enhanced security measures within the system.",
      keywords: [
        "addressed multiple security vulnerabilities",
        "Single Sign-On Authentication",
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Student Research Assistant{" "}
            <span className="text-AAsecondary">@ AgriLife IT</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            October 2022 - Present | College Station, Texas
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
