import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MyButton from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <MyButton
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </MyButton>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <MyButton onClick={handleWorkScroll}>Work</MyButton>
                  <MyButton onClick={handleAboutScroll}>About</MyButton>
                  {showBlog && (
                    <MyButton onClick={() => router.push("/blog")}>
                      Blog
                    </MyButton>
                  )}
                  {showResume && (
                    <MyButton
                      onClick={() =>
                        window.open("mailto:hello@chetanverma.com")
                      }
                    >
                      Resume
                    </MyButton>
                  )}

                  <MyButton
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </MyButton>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <MyButton
                    onClick={() => router.push("/")}
                    classes="first:ml-1"
                  >
                    Home
                  </MyButton>
                  {showBlog && (
                    <MyButton onClick={() => router.push("/blog")}>
                      Blog
                    </MyButton>
                  )}
                  {showResume && (
                    <MyButton
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </MyButton>
                  )}

                  <MyButton
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </MyButton>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <MyButton onClick={handleWorkScroll}>Work</MyButton>
            <MyButton onClick={handleAboutScroll}>About</MyButton>
            {showBlog && (
              <MyButton onClick={() => router.push("/blog")}>Blog</MyButton>
            )}
            {showResume && (
              <MyButton
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </MyButton>
            )}

            <MyButton
              onClick={() => window.open("mailto:hello@chetanverma.com")}
            >
              Contact
            </MyButton>
            {mounted && theme && data.darkMode && (
              <MyButton
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </MyButton>
            )}
          </div>
        ) : (
          <div className="flex">
            <MyButton onClick={() => router.push("/")}>Home</MyButton>
            {showBlog && (
              <MyButton onClick={() => router.push("/blog")}>Blog</MyButton>
            )}
            {showResume && (
              <MyButton
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </MyButton>
            )}

            <MyButton
              onClick={() => window.open("mailto:sankalpchap1@gmail.com")}
            >
              Contact
            </MyButton>

            {mounted && theme && data.darkMode && (
              <MyButton
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </MyButton>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
