import Prism from "prismjs";
import React, { useEffect } from "react";
import { ProjectSubTitle, ProjectTitle } from "../common";
import Architecture from "./Architecture";
import Content from "./Content";
import { content2Data, contentData, featuresData } from "../../shared/data";
import Features3 from "./Features3";
import Methodology from "./Methodology";
import Methodology2 from "./Methodology2";

import "prism-themes/themes/prism-holi-theme.css";
import "prismjs/components/prism-java.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/themes/prism.css";

// Add the content of this doc section
const Travelix = (props) => {
  const { project } = props;
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <ProjectTitle name={project.title} />

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full space-y-4 sm:text-base text-sm ">
            <div className="flex flex-col font-Header ">
              <ProjectSubTitle name="Abstract" />
              <span className="text-gray-400  tracking-wide">
                &emsp;TRAVELIX is a personalized travel recommendation system
                that provides recommendations to users based on their
                preferences and travel history. The tool will analyze user
                preferences and destination data (granular to State level) to
                recommend Restaurants, Hotels and Nightlife that match the
                user's preferences.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <ProjectSubTitle name="Introduction" />
              <span className="text-gray-400 mb-4">
                &emsp;Need for Personalized Travel Recommendation Systems plus
                no existing solutions as of now gives rise to Travelix. Travelix
                would be useful for people who are looking for personalized
                travel recommendations that match their interests and budget and
                could be used by travel enthusiasts, families, couples, and
                anyone else who wants to plan a trip. Moreover, personalized
                recommendations help travelers discover new places and
                activities that they might have otherwise missed. By taking into
                account a user's travel history, Travelix can suggest
                destinations that the user may not have considered before,
                opening up new possibilities for travel experiences. Overall,
                the motivation behind Travelix is to create a tool that
                simplifies travel planning, saves time and effort, and provides
                personalized recommendations that help travelers make the most
                of their trips. Travelix aims to solve this problem by using
                advanced recommendation algorithms that analyze user
                preferences, travel history, and destination data to provide
                personalized travel recommendations.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Features3 {...featuresData} />
      <Content {...contentData} />
      <Content {...content2Data} />
      <Architecture />
      <Methodology />
      <Methodology2 />
    </div>
  );
};

export default Travelix;
