import { useRef } from "react";
import WorkCard from "../components/WorkCard";
import MyName from "../components/MyName/MyName";
import AboutMe from "../components/AboutMe/AboutMe";
import SocialMediaArround from "../components/SocialMediaArround/SocialMediaArround"
import Header from "../components/NewHeader/Header"
import projectsData from "../data/projectsData";
import Link from 'next/link';

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Header sectionsRef={homeRef} />
      <MyName />
      <SocialMediaArround />
      <AboutMe ref={aboutRef} />
      <WorkCard ref={workRef} />

    </div>
  );
}
