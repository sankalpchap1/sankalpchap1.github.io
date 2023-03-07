import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Experience from "../components/Resume/Experience";
import Education from "../components/Resume/Education";
import MyButton from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <MyButton onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </MyButton>
        </div>
      )}
      <div
        className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"
          }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{resume.name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="justify-content text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>
                {resume.experiences.map(
                  ({ id, dates, location, position, company, points }) => (
                    <Experience
                      key={id}
                      dates={dates}
                      location={location}
                      position={position}
                      company={company}
                      points={points}
                    ></Experience>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {resume.education.map(
                  ({ id, name, degree, location, dates, courses, introduction, files }) => (
                    <Education
                      key={id}
                      name={name}
                      degree={degree}
                      location={location}
                      dates={dates}
                      courses={courses}
                      introduction={introduction}
                      files={files}
                    ></Education>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
