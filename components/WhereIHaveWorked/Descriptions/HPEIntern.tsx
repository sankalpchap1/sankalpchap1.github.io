import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function HPEIntern() {
  const tasks = [
    {
      text: "Developed a Python stress utility for Kubernetes resource management analysis, employing microservice architecture with gRPC HTTP/2 protocol for API development.",
      keywords: ["Python", "Kubernetes", "gRPC", "HTTP/2"],
    },
    {
      text: "Integrated stress-ng tool with 300+ stressor mechanisms and containerized the application using Docker for seamless deployment to Kubernetes cluster.",
      keywords: ["stress-ng", "Docker", "Kubernetes"],
    },
    {
      text: "Designed and implemented dynamic profile creation and customizable stress testing features.",
      keywords: ["Stress Testing"],
    },
    {
      text: "Developed a real-time resource allocation monitoring dashboard.",
      keywords: ["monitoring dashboard", "real-time resource"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern{" "}
            <span className="text-AAsecondary">@ Python Automation</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2023 - August 2023 | Andover, Massachusetts
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
