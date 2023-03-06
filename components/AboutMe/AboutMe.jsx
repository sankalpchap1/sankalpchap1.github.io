import React from "react";
import Img from "./Img";
import ArrowIcon from "./ArrowIcon";
import DevIcon from "../Resume/Skills/DevIcon";
import { devIcons } from '../Resume/Skills/dev-icons'
import { ToolboxIcon } from "../Socials/icons";

const AboutMe = (props) => {
  const technologies = [
    ["Solidity", "Next.js", "Ether.js", "JavaScript (ES6+)", "Tailwind CSS"],
    ["Hardhat", "Node.js", "react-moralis", "TypeScript", "Framer Motion"],
  ];
  const iconGroups = devIcons.reduce((acc, curr, i) => {
    const index = Math.floor(i / 6);
    acc[index] = acc[index] ? [...acc[index], curr] : [curr];
    return acc;
  }, []);
  const iconGroupsMobile = devIcons.reduce((acc, curr, i) => {
    const index = Math.floor(i / 15);
    acc[index] = acc[index] ? [...acc[index], curr] : [curr];
    return acc;
  }, []);
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Howdy! My name is Sankalp Chapalgaonkar and I'm currently pursuing <span className="text-AAsecondary">Master's Degree</span> in <span className="text-AAsecondary">Computer Science</span> at <span className="text-AAsecondary">Texas A&M University</span>.
                My coursework at Texas A&M University includes Machine Learning, Analysis of Algorithms, Operating Systems, Information Retrieval, Data Mining and Systematic Trading Strategies.
                I completed my <span className="text-AAsecondary">Bachelor's Degree</span> at the <span className="text-AAsecondary">Indian Institute of Technology Madras</span> in Electrical Engineering in 2019.
                After completing my graduation, I worked with <span className="text-AAsecondary">JP Morgan Chase & Co</span> for over three years as an <span className="text-AAsecondary">Associate Software Developer</span> with Wealth Management line of business as a part of the Advisor Connect team developing CRM software for advisors in the firm.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400 ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div>

            <span className="flex items-center mb-8">
              <div className="bg-back-subtle text-gray-400 pb-2 mr-2 rounded-full">
                <ToolboxIcon />
              </div>
              <h4 className="text-2xl text-gray-400 text-accent font-semibold">Toolbox</h4>
            </span>
            <div className="sm:block hidden">
              <div className="font-Header tracking-wide flex flex-row space-x-16">
                {iconGroups.map((iconGroup, groupIndex) => (
                  <div key={groupIndex} className="flex flex-row space-x-1 items-center">
                    <div className="flex flex-col space-y-4 sm:text-base text-sm">
                      {iconGroup.map((icon, iconIndex) => (
                        <div key={iconIndex} className="flex flex-row items-center space-x-2">
                          <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                          <DevIcon name={icon.name} iconName={icon.iconName} key={icon.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:block">
              <div className="font-Header tracking-wide flex flex-row space-x-16">
                {iconGroupsMobile.map((iconGroup, groupIndex) => (
                  <div key={groupIndex} className="flex flex-row space-x-1 items-center">
                    <div className="flex flex-col space-y-4 sm:text-base text-sm">
                      {iconGroup.map((icon, iconIndex) => (
                        <div key={iconIndex} className="flex flex-row items-center space-x-2">
                          <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                          <DevIcon name={icon.name} iconName={icon.iconName} key={icon.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img src={"/images/sankalp_career_fair.jpeg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img src={"/images/sankalp_career_fair.jpeg"} className={"object-contain rounded-lg"} alt="My Image Not Found" />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-0  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;