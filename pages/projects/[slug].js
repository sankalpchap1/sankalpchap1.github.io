import { useRouter } from 'next/router'
import data from "../../data/portfolio.json"
import { nameFormatter } from '../../utils';
import Header from '../../components/NewHeader/Header';
import SocialMediaArround from "../../components/SocialMediaArround/SocialMediaArround";
import RoutingAlgorithms from "../../components/projects/RoutingAlgorithms"
import AboutMe from '../../components/AboutMe/AboutMe';

const getComponentFromName = (project) => {
  switch (nameFormatter(project.title)) {
    case 'routing-algorithms':
      return <RoutingAlgorithms project={project}/>;
    case 'operating-system-design':
      return <AboutMe />;
    case 'automated-trading-bot':
      return <AboutMe />;
    case 'mars-rover-team':
      return <AboutMe />;
    case 'light-fidelity-research':
      return <AboutMe />;
    case 'ngo-android-application':
      return <AboutMe />;
    case '3-d-lens-antenna-design':
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
      {getComponentFromName(project)}

    </div>
  );
}

export default ProjectPage;