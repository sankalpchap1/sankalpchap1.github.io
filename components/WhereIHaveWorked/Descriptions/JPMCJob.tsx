import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function JPMCJob() {
  const tasks = [
    {
      text: "Worked with Wealth Management division in Advisor Connect team developing CRM softwares for advisors.",
      keywords: ["Advisor Connect", "CRM softwares"],
    },
    {
      text: "Led the legacy transformation project moving from monolithic design to microservice infrastructure having 3-Tier De-coupled Web Apps built using rxJava, Oracle, Spring Boot, Apache Kafka and Elasticsearch.",
      keywords: ["Oracle", "Spring Boot", "Apache Kafka", "Elasticsearch"],
    },
    {
      text: "Designed an automated tool for scheduling intraday/daily/weekly ETL (Extract/Transform/Load) jobs for Data Migration/Processing of 5M+ records using Spring Cloud Data Flow (SCDF) Framework.",
      keywords: ["Spring Cloud Data Flow"],
    },
    {
      text: "Engineered a software within 6 months, deployed across 3 regions, providing a one-stop-shop solution for 5000+ advisors having all the required data in one screen instead of navigating through separate applications.",
      keywords: ["5000+ advisors", "one-stop-shop solution"],
    },
    {
      text: "Developed an algorithm for optimal data reconciliation by comparing 10M+ records daily with efficient heap memory consumption. Built a dashboard having graphical visualisation of these data inconsistencies.",
      keywords: ["optimal data reconciliation", "10M+ records"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate Software Developer{" "}
            <span className="text-AAsecondary">@ Fullstack</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July 2019 - July 2022 | Mumbai, India
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
