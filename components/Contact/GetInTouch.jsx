import React from "react";
import Form from "../common/Form";
import ArrowIcon from "../Icons/ArrowIcon";
import { contactData } from "../shared/data";

export default function GetInTouch() {
  const { header, content, items, form } = contactData;
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            05.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, drop
        me a message
      </p>
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:pb-4 sm:px-6 lg:px-8 lg:pb-20">
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6 pt-12">
              {content && (
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  {content}
                </p>
              )}
              <ul className="mb-6 md:mb-0">
                {items.map(({ title, description, icon: Icon }, index) => (
                  <li key={`item-contact-${index}`} className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-400 dark:text-white">
                        {title}
                      </h3>
                      {typeof description === "string" ? (
                        <p
                          key={`text-description-${index}`}
                          className="text-gray-600 dark:text-slate-400"
                        >
                          {description}
                        </p>
                      ) : (
                        description &&
                        description.map((desc, index) => (
                          <p
                            key={`text-description-${index}`}
                            className="text-gray-600 dark:text-slate-400"
                          >
                            {desc}
                          </p>
                        ))
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Form {...form} btnPosition="center" />
          </div>
        </div>
      </div>
    </div>
  );
}
