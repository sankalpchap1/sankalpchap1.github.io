import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Anveshak() {
  const tasks = [
    {
      text: "Co-founded a 3-tier team of 30+ members to develop 2 Rovers and represented IIT Madras in International Rover Series organized by Mars Society",
      keywords: ["International Rover Series", "ranked 25th"],
    },
    {
      text: "Ranked 25th (2018) and 27th (2017) among 90 plus teams across the globe",
      keywords: ["25th", "27th", "90 plus teams"],
    },
    {
      text: "Coded drift compensation algorithms which dynamically corrected the rover’s path during automated terrain traversal task.",
      keywords: [
        "drift compensation algorithms",
        "automated terrain traversal",
      ],
    },
    {
      text: "Led the Communications Module to support Non line of sight video transmission upto 1km with minimal latency using FPV, IP and USB cameras for GPS tracking of rover.",
      keywords: [
        "video transmission",
        "FPV",
        "IP",
        "USB cameras",
        "GPS tracking",
      ],
    },
    {
      text: "Used computer vision algorithms to detect physical markers in the vicinity of the GPS location.",
      keywords: ["computer vision algorithms"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software and Electronics Lead{" "}
          <span className="text-AAsecondary">@ Mars Rover Team</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          May 2016 - April 2018
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
