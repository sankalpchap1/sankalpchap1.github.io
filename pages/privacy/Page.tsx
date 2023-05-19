import React from "react";
import fs from "fs";
import path from "path";
import md from "markdown-it";
// import { useState, useEffect } from "react";

const Page = () => {
  console.log("processcwd: ", process.cwd());
  const filePath = path.join(process.cwd(), "pages/privacy/privacy.md");
  console.log("filePath: ", filePath);
  const fileContent = fs.readFileSync(filePath, "utf8");
  // const [fileContent, setFileContent] = useState("");
  // useEffect(() => {
  //   fetch("privacy.md")
  //     .then((response) => response.text())
  //     .then((text) => setFileContent(text));
  // }, []);

  // print(fileContent);

  return (
    <div
      className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
