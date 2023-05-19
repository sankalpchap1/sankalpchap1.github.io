import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ArrowIcon from "../Icons/ArrowIcon";
import data from "../../data/portfolio.json";
import Link from "next/link";
import { nameFormatter } from "../../utils";
import { blue } from "@mui/material/colors";

const ProjectComp = ({ img, name, dates, description, tech }) => {
  return (
    <Link href={`/projects/${nameFormatter(name)}`}>
      <Card
        sx={{
          maxWidth: 250,
          margin: "16px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
          bgcolor: "#122c56",
        }}
      >
        <CardMedia sx={{ height: 150 }} image={img} />
        <CardContent sx={{ height: 170 }}>
          {/* <Typography gutterBottom variant="h5" component="div" className="flex-none tracking-wider text-lg sm:text-2xl">

          </Typography> */}
          <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
            {name}
          </span>
          <p className="text-gray-300 md:text-gray-400 text-left">
            {description}
          </p>
          {/* <Typography variant="body3" color="text.ternary"> */}
          <ul
            className="flex flex-wrap w-full text-gray-500
               text-sm font-Text2"
          >
            {tech.map((t) => (
              <span className="pr-4 z-10">{t}</span>
            ))}
          </ul>
          {/* </Typography> */}
        </CardContent>
      </Card>
    </Link>
  );
};

const ProjectCard = () => {
  return (
    <div
      id="ProjectCard"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              03.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Projects
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          {data.projects.map((project) => (
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <ProjectComp
                key={project.title.toLowerCase().split(" ").join("-")}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                tech={project.tech}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
