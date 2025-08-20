import React, { useState } from "react";
import Head from "next/head";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import projects from "../data/projects.json";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { constants} from "../data/constants";

export default function Projects() {
  const [showMore, setShowMore] = useState(Array(projects.length).fill(false));
  const toggleButton = (index) => {
    let arr = showMore;
    arr[index] = !arr[index];
    setShowMore([...arr]);
  };
  return (
    <>
      <Head>
        <title>Projects | {constants.data}</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Projects"
          description="A collection of projects developed by the South Windsor TSA club raning from Web Developement to Competitive Programming"
        />
        {projects.map((project, index) => (
          <section key={index}>
            <HeadingWithIllustration key={project.type} title={project.type} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {project.content
                .slice(0, showMore[index] ? project.content.length : 3)
                .map(({ title, link, file }) => (
                  <ProjectCard
                    key={title}
                    title={title}
                    link={link}
                    bg={file}
                  />
                ))}
            </div>
            {project.content.length > 3 ? (
              <a
                className="text-left w-full flex justify-end mt-6 text-accent cursor-pointer"
                target="_blank"
                rel="noreferrer"
                onClick={() => toggleButton(index)}
              >
                {showMore[index] ? (
                  <>
                    <span>View Less</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>View More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </>
                )}
              </a>
            ) : (
              <></>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
