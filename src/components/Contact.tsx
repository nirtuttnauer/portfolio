import React, { useState } from 'react';
import { motion } from 'framer-motion';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Contact Me
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          whileFocus={{ scale: 1.05 }}
          className="p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          whileFocus={{ scale: 1.05 }}
          className="p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          whileFocus={{ scale: 1.05 }}
          className="p-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        ></motion.textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: '#22c55e', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          className="p-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};