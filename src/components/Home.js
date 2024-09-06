import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link here
import PersonalPhoto from './photo_2024-09-06_16-20-49.jpg'; // Update with the correct path

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
    >
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative mb-8"
      >
        <img 
          src={PersonalPhoto} 
          alt="Khalid Abdelaty" 
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-full opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        />
      </motion.div>
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-5xl font-bold mb-4"
      >
        Khalid Abdelaty
      </motion.h1>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl mb-8"
      >
        Computer Science Student | Data Engineer | Microsoft Student Ambassador
      </motion.p>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-x-4"
      >
        <Link to="/about" className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">About Me</Link>
        <Link to="/projects" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition duration-300">My Projects</Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
