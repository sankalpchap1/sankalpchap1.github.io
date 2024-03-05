import { useRouter } from "next/router";
import AboutMe from "../../components/AboutMe/AboutMe";
import Header from "../../components/NewHeader/Header";
import DataMining from "../../components/projects/DataMining";
import RoutingAlgorithms from "../../components/projects/RoutingAlgorithms";
import Travelix from "../../components/projects/travelix/Travelix";
import SocialMediaArround from "../../components/SocialMediaArround/SocialMediaArround";
import data from "../../data/portfolio.json";
import { nameFormatter } from "../../utils";

const getComponentFromName = (project) => {
  switch (nameFormatter(project.title)) {
    case "travelix":
      return <Travelix project={project} />;
    case "machine-learning-project":
      return <DataMining project={project} />;
    case "systematic-trading-strategies":
      return <AboutMe />;
    case "routing-algorithms":
      return <RoutingAlgorithms project={project} />;
    case "operating-system-design":
      return <AboutMe />;
    case "automated-trading-bot":
      return <AboutMe />;
    case "mars-rover-team":
      return <AboutMe />;
    case "light-fidelity-research":
      return <AboutMe />;
    case "ngo-android-application":
      return <AboutMe />;
    case "3-d-lens-antenna-design":
      return <AboutMe />;
    default:
      return <div>Invalid project name</div>;
  }
};

function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = data.projects.find(
    (project) => nameFormatter(project.title) === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  function handleGoBack() {
    router.back();
    setTimeout(() => {
      const workElement = document.getElementById("ProjectCard");
      if (workElement) {
        workElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
      <Header />
      <SocialMediaArround />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "90px",
        }}
      >
        <button className="back-button" onClick={handleGoBack}>
          Go back
        </button>
      </div>
      {getComponentFromName(project)}
    </div>
  );
}

export default ProjectPage;
