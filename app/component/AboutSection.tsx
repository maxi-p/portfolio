"use client";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
        <li>SQL</li>
        <li>JavaScript / TypeScript</li>
        <li>Python</li>
        <li>HTML/CSS</li>
        <li>Kotlin</li>
      </ul>
    ),
  },
  {
    title: "Tech",
    id: "tech",
    content: (
      <ul className="list-disc pl-2">
        <li>GIT</li>
        <li>Node.js</li>
        <li>Docker</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Spring (Boot/MVC/Web/Data)</li>
        <li>MongoDB</li>
        <li>React.js</li>
        <li>Redis</li>
      </ul>
    ),
  },
  {
    title: "Cloud",
    id: "cloud",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS EC2</li>
        <li>AWS RDS</li>
        <li>AWS S3</li>
        <li>AWS Route 53</li>
        <li>AWS IAM</li>
        <li>AWS Cognito</li>
        <li>AWS Lamda</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          University of Central Florida (Aug. 2022 - Dec. 2024)
          <br />
          Bachelor&apos;s of Science in Computer Science
          <br />
          Cumulative GPA 3.9
          <br />
          CS GPA 4.0
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = React.useState<string>("languages");
  const [pending, startTransition] = React.useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/profile_chess.png"
          alt="profile_chess"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m Max. I&apos;m passionate about building clean{" "}
            and durable software, computer science concepts, and{" "}
            solving programming puzzles. Outside of programming, I like{" "}
            playing chess.<br />
            I&apos;m a new{" "}
            <a
              href="https://www.ucf.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline rounded transition-colors"
            >
              UCF ⚔️
            </a>{" "}
            graduate with a Bachelor&apos;s degree in Computer Science. I
            recently completed a Software Engineering Internship at{" "}
            <a
              href="https://mobile.beplayfuel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline rounded transition-colors"
            >
              COMPETE bePlayFuel
            </a>
          </p>
          {pending ? <div>{/* Loading */}</div> : null}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
              id="languages"
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tech")}
              active={tab === "tech"}
              id="tech"
            >
              {" "}
              Tech{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cloud")}
              active={tab === "cloud"}
              id="cloud"
            >
              {" "}
              Cloud{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              id="education"
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {selectedTab?.content ?? <div>No content available</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
