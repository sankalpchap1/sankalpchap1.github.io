import { useRef } from "react";
import MyName from "../components/MyName/MyName";
import AboutMe from "../components/AboutMe/AboutMe";
import SocialMediaArround from "../components/SocialMediaArround/SocialMediaArround";
import Header from "../components/NewHeader/Header";
import ProjectCard from "../components/projects/ProjectCard";
import GetInTouch from "../components/Contact/GetInTouch";
import WhereIHaveWorked from "../components/WhereIHaveWorked/WhereIHaveWorked";

export default function Home() {
  // Ref
  const projectRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Header sectionsRef={homeRef} />
      <MyName />
      <SocialMediaArround />
      <AboutMe ref={aboutRef} />
      <WhereIHaveWorked />
      <ProjectCard ref={projectRef} />
      <GetInTouch />
    </div>
  );
}
