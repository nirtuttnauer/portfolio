import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-16"
    >
      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left md:mr-12">
        <motion.h2
          className="text-5xl text-primary font-mono font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg leading-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I’m a recent <span className="text-primary">computer science graduate</span> with extensive knowledge in
          software development. I’m passionate about <span className="text-primary">deep learning</span> and leveraging it
          to solve complex problems. Proficient in <span className="text-primary">Swift</span>, <span className="text-primary">Java</span>, <span className="text-primary">JavaScript</span>, and <span className="text-primary">Python</span>, with experience building scalable cloud-based solutions.
        </motion.p>
      </div>

      {/* Profile Picture Section */}
      <motion.div
        className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Animated Outer Circle */}
        <motion.div
          className="absolute w-full h-full rounded-full border-4 border-primary animate-pulse"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>

        {/* Profile Picture */}
        <Image
          src="/1682721175478.jpeg" // Ensure this is the correct path
          alt="Nir Tuttnauer Profile Picture"
          width={288}
          height={288}
          className="rounded-full object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}