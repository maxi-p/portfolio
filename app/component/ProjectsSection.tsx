"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI-based Puppetry",
    description:
      "UCF Senior Design finalist project. Led development of software for UCF education simulation research department",
    image: "/images/projects/ai-puppetry.jpg",
    tag: ["All"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=Eqexx4eSJys",
  },

  {
    id: 2,
    title: "Qvault",
    description:
      "PDF reader & note-taker web app. Services written using Spring Boot, Spring Web, & Spring Data.",
    image: "/images/projects/qvault.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/maxi-p/Qvault",
    previewUrl: "",
  },
  {
    id: 3,
    title: "COMPETE bePlayFuel",
    description:
      "Work project. bePlayFuel is a sport social network app that lets users COMPETE in their sports. Worked on the mobile app, the backend, and containerization.",
    image: "/images/projects/compete.jpg",
    tag: ["All"],
    gitUrl: "",
    previewUrl: "https://mobile.beplayfuel.com/",
  },
  {
    id: 4,
    title: "Contra 4 Jungle Engine",
    description:
      "Recreated a Jungle level of Contra 4 (a childhood favorite) in C++ with SFML graphics library.",
    image: "/images/projects/contra.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/maxi-p/Contra4-Jungle-Level",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Live Chat App",
    description:
      "Java & JavaScript Live Chat web application. Build using WebSockets and Java Enterprise technologies such as Servlets and JDBC.",
    image: "/images/projects/chat.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/maxi-p/chat",
    previewUrl: "",
  },
  {
    id: 6,
    title: "verticAI",
    description:
      "A Python AI solo project. This CLI app is a dunk detector & dunk clip trimmer app.",
    image: "/images/projects/verticAI.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/maxi-p/verticAI",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  // const [tag, setTag] = React.useState<string>("All");
  const tag = "All";
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag: string) => {
  //   setTag(newTag);
  // };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
