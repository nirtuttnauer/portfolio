import React from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpo,
  SiTerraform,
  SiAnsible,
  SiSelenium,
  SiSupabase,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiKubernetes,
  SiJenkins,
} from "react-icons/si";

export const Skills = () => {
  const skills = {
    Frontend: [
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "GraphQL", icon: <SiGraphql /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "SQL", icon: <SiSupabase /> },
      { name: "NoSQL", icon: <SiMongodb /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
    DevOps: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "GitHub Actions", icon: <FaGitAlt /> },
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Jenkins", icon: <SiJenkins /> },
    ],
  };

  return (
    <section id="skills" className="py-20 px-10 md:px-20">
      {/* Section Title */}
      <div className="flex flex-col space-y-10 pb-[50px]">
        <h2 className="text-5xl font-mono font-semibold">Skills</h2>
      </div>
      {/* Skills Section */}
      <div className="space-y-12 pl-7">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <div key={index}>
            <motion.h3
              className="text-3xl font-mono font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {category}
            </motion.h3>
            <div className="overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-teal-400">
              <motion.ul
                className="flex space-x-6 w-max"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {skillsList.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="flex flex-col items-center justify-center aspect-square w-32 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <span className="text-4xl text-teal-400 group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium mt-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};