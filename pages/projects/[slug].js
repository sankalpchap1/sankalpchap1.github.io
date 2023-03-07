import { useRouter } from 'next/router'
import { useEffect } from "react";
import data from "../../data/portfolio.json"
import { nameFormatter } from '../../utils';
import Header from '../../components/NewHeader/Header';
import SocialMediaArround from "../../components/SocialMediaArround/SocialMediaArround";
import MyName from "../../components/MyName/MyName"
import AboutMe from '../../components/AboutMe/AboutMe';

const getComponentFromName = (name) => {
  switch (name) {
    case 'routing-algorithms':
      return <MyName />;
    case 'operating-system-design':
      return <AboutMe />;
    default:
      return <div>Invalid project name</div>;
  }
}

function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = data.projects.find((project) => nameFormatter(project.title) === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Scroll to the "work" section on the home page after clicking the back button
  function handleGoBack() {
    router.back();
    setTimeout(() => {
      const workElement = document.getElementById('WorkCard');
      if (workElement) {
        workElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Header />
      {/* <MyName /> */}
      <SocialMediaArround />
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '90px' }}>
      <button className="back-button" onClick={handleGoBack}>
        Go back
      </button>
      </div>
      {/* {getComponentFromName(nameFormatter(project.title))} */}

    </div>
  );
}

export default ProjectPage;