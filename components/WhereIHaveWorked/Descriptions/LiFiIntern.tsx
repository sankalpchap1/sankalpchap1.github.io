import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LiFiIntern() {
  const tasks = [
    {
      text: "Spearheaded research efforts to establish a fully-equipped laboratory with a LiFi testbed, facilitating experimental tests for outage analysis in SISO Li-Fi Indoor Communication environments, encompassing both Line-of-Sight (LOS) and Non-Line-of-Sight (NLOS) conditions.",
      keywords: ["LiFi testbed", "LOS", "NLOS"],
    },
    {
      text: "Successfully deployed a practical SISO Li-Fi communication pair, conducting comprehensive experimental analysis on received power and outage distance, while considering variables such as different colors and installation heights.",
      keywords: ["SISO Li-Fi communication pair"],
    },
    {
      text: "Played a pivotal role in collaborating with Philips and the Eindhoven team, leveraging their expertise and resources for LiFi dongles, downlink receivers, and Modem boards, ensuring seamless integration into the experimental setup.",
      keywords: [
        "Philips",
        "Eindhoven",
        "LiFi dongles",
        "downlink receivers",
        "Modem boards",
      ],
    },
    {
      text: "Employed Low Noise Amplifier (LNA) technology to effectively enhance the received signal above the noise floor, optimizing signal quality and transmission reliability within the LiFi system.",
      keywords: ["Low Noise Amplifier"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Research Intern{" "}
            <span className="text-AAsecondary">@ Light Fidelity</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June 2017 - February 2018
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
