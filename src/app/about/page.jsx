"use client";
import { AboutList } from "@/components/aboutList";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefView = useInView(skillRef);
  const experienceRef = useRef();
  const isExperienceView = useInView(experienceRef, { margin: "-100px" });

  const SkillContainer = ({ skill }) => (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {skill}
    </div>
  );

  const HobbiesList = ({ hobby }) => (
    <li className="p-2 hover:text-xl justify-around">
      <span className="italic">{hobby}</span>
    </li>
  );
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              My self Rajesh completed my btech in 2019 in ECE stream. Due to
              interest towards javascript and websites i turned towards the
              software. with that interest TCS gave me first chance to explore
              that area of software. To expand more on knowledge and to try some
              thing i shifted to start up company called BexCard (Pay roll:
              Vrishkar consultancy) there i have been the core member of website
              development team. After that i explored the React Native side
              where i played prominent role in development and publishing of
              Android and iOS apps
            </p>
            <ol style={{ listStyleType: "decimal" }}>
              <HobbiesList
                hobby={
                  " Apart from that i am good writer but never published any stories"
                }
              />
              <HobbiesList
                hobby={
                  "Good bathroom singer (because no one wants to hear my voice that's a different story)"
                }
              />
              <HobbiesList
                hobby={
                  "When ever i find time i would like to explore the lands, but visited only few. Which you find in my instagram"
                }
              />
              <HobbiesList
                hobby={
                  "Most of the time i enjoy watching Anime rather than K drama, I may be different but that is what it is."
                }
              />

              <HobbiesList
                hobby={
                  "At Last, I spend very little amount of time in editing the videos i have captured and memes creation in my family group to irritate my cousins and sibling"
                }
              />
            </ol>
            {/* For the sign in the future
             */}
            {/* <div className="self-end">
              <svg
                width="175"
                height="119"
                viewBox="0 0 175 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="175"
                  height="119"
                  fill="#F5F5F5"
                  fill-opacity="0.11"
                />
                <path
                  d="M2 5C2.64546 30.8186 6 56.0894 6 82"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M5 2C11.3792 9.53909 18.138 17.4829 24.1111 25.3333C25.9044 27.6902 25.1669 33.1634 25 36C24.6941 41.2005 13.5649 44 9.55556 44C4.23222 44 5.64115 44.7708 10.4444 46.5C22.034 50.6723 23.8455 71.5292 36.4444 74.8889C41.2098 76.1596 41.9277 71.5465 45.1111 69.5C47.9199 67.6943 52.949 65.926 54.7778 63C55.8053 61.356 59.5612 50.892 56.5556 49.2222C53.0384 47.2683 51.2568 45.3812 47.2222 46.7778C44.0703 47.8688 40 49.8291 40 53.6111C40 56.8094 38.7355 70.8613 45.4444 68.9444C46.9024 68.5279 49.6655 66.6182 49.9444 64.9444C50.4504 61.9089 52.9233 62.5549 53.7778 59.7778C54.4963 57.4427 56 55.5082 56 53C56 47.9679 55.1209 53.3279 55 55.4444C54.915 56.9327 51.0492 65.8264 54 66C58.0031 66.2355 60.8015 66.4453 64.5 68.5C67.0667 69.9259 71.7174 69 74.5 69C77.9146 69 78 64.2824 78 61.3889C78 56.7285 76.6609 39.4824 75.2222 54.4444C74.5779 61.1454 73.8752 67.7738 72.9444 74.4444C72.3158 78.9499 69.3755 81.8482 68.2222 86C67.5526 88.4106 66.9594 92.485 65.2222 94.2222C59.8923 99.5522 65.5553 117 57.5 117C48.9155 117 44.0646 109.128 43.0556 101.056C42.0213 92.7812 54.5474 97 59 97"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M73 42C73 34.8869 75.0503 29 65 29C58.8339 29 66.4848 32.0719 68.7778 33C72.0685 34.332 72.5345 34.0689 74 37"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M92 46C100.951 44.8811 105 42.3558 105 33.2222C105 28.5301 91.8354 26.6765 90.2222 32C87.9147 39.615 89 48.27 89 56.2222C89 66.5178 98.3524 57 103 57"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M120 49C120 42.6464 121.143 39 113.222 39C106.069 39 106.617 46.5377 109 51.4444C113.5 60.7084 121.953 64.3548 131.389 67.5C135.003 68.7047 136.511 69.0325 135.944 73C135.421 76.6661 129.816 80.6464 126.389 80.9444C123.846 81.1655 118.06 81.9613 117.056 78.4444C116.544 76.6539 113.346 74.3269 116 73"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M141 6C142.134 25.2752 152 42.5558 152 62.0556C152 64.9578 153.337 70.2711 149 70C148.264 69.954 154.717 56.0007 155.444 54.2222C156.474 51.7056 159.444 48.2857 162.444 50C164.522 51.1873 166.146 60.8279 166.889 63.0556C168.101 66.6914 167.469 66.2922 170 63.4444C171.61 61.633 173 60.5778 173 58"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div> */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Skill container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-800px" }}
              animate={isSkillRefView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILL
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <SkillContainer skill={"JAVASCRIPT"} />
              <SkillContainer skill={"TYPESCRIPT"} />
              <SkillContainer skill={"HTML"} />
              <SkillContainer skill={"CSS"} />
              <SkillContainer skill={"TAILWIND_CSS"} />
              <SkillContainer skill={"REACT_JS"} />
              <SkillContainer skill={"REACT_NATIVE"} />
              <SkillContainer skill={"NEXT_JS"} />
              <SkillContainer skill={"SENTRY"} />
              <SkillContainer skill={"MAESTRO_TESTING"} />
              <SkillContainer skill={"REACT_QUERY"} />
              <SkillContainer skill={"REDUX"} />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXperience Title */}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* Experience List */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isExperienceView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* Experience List Item */}
              <AboutList
                title={"Senior front end developer"}
                desc={
                  "Developing and marinating the different versions of the app from the scratch. Proud to be in team from beginning to 2.2.1 version of the app"
                }
                timeLine={"2021 - present"}
                company={"Bex Card "}
              />
              <AboutList
                title={"FreeLancer,Front end"}
                desc={
                  "Happy to be part in the GMAECOM, and contribute in build the app from the scratch to checkout section"
                }
                timeLine={"04/2022 - 06/2022"}
                company={"Modicum Technologies"}
                right={true}
              />
              <AboutList
                title={"System Engineer"}
                desc={
                  "Helped the team with the website development and Jenkins pipeline"
                }
                timeLine={"2019 - 2021"}
                company={"TCS"}
              />
            </motion.div>
          </div>
        </div>
        {/* Svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
