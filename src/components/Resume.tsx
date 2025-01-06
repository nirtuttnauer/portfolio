import React from 'react';
import { motion } from 'framer-motion';

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Replace with your resume file path
    link.download = 'Nir_Tuttnauer_Resume.pdf'; // Replace with your preferred file name
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-5 text-2xl font-bold text-white"
      >
        Download My Resume
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={handleDownload}
      >
        Download
      </motion.button>
    </motion.div>
  );
};