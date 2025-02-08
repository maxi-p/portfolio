"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const downloadPDF = async () => {
    setIsLoading(true);
    const response = await fetch("/resume/Max_Petrushin_resume.pdf");
    console.log("Max_Petrushin_resume.pdf");
    if (!response.ok) {
      console.log("ERROR: File not found!");
    } else {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Max_Petrushin_resume.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    }
    setIsLoading(false);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span> */}
            {/* <br></br> */}
            <TypeAnimation
              sequence={[
                "Max Petrushin",
                1000,
                "Software Engineer",
                1000,
                "Computer Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I&apos;m Max. I&apos;m a software engineer and a computer
            science graduate at{" "}
            <a
              href="https://www.ucf.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-gray-100 rounded transition-colors"
            >
              UCF
            </a>
            . I worked as a Software Engineer at{" "}
            <a
              href="https://mobile.beplayfuel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-gray-100 rounded transition-colors"
            >
              COMPETE bePlayFuel
            </a>{" "}
            and as a Workshop/Programming Instructor at{" "}
            <a
              href="https://github.com/knighthacks"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-gray-100 rounded transition-colors"
            >
              Knight Hacks
            </a>
            .
          </p>
          <div>
            <Link
              href="/#  "
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={downloadPDF}
              disabled={isLoading}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {isLoading ? "Generating..." : "Resume"}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
