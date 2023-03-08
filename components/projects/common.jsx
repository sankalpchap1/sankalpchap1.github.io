import ArrowIcon from "../Icons/ArrowIcon";
const ProjectTitle = (props) => {
  const { name } = props;
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-gray-400 h-[0.2px] w-1/4 sm:w-72"></div>
      <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl mr-4 ml-4">
        {name}
      </span>
      <div className="bg-gray-400 h-[0.2px] w-1/4 sm:w-72"></div>
    </div>
  );
};

const ProjectSubTitle = (props) => {
  const { name } = props;
  return (
    <div className="flex flex-row  items-center mr-4">
      <ArrowIcon
        className={
          "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
        }
      />
      <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg pt-1 pl-2">
        {name}
      </span>
    </div>
  );
};

export { ProjectTitle, ProjectSubTitle };
