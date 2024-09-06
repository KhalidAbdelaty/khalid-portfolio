import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, company, testimonial }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 mb-6"
  >
    <p className="mb-4 text-gray-600 dark:text-gray-300 italic">"{testimonial}"</p>
    <div className="flex items-center">
      <div className="ml-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{role} at {company}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Senior Data Scientist",
      company: "Tech Innovators Inc.",
      testimonial: "Khalid's work on our data processing pipeline was exceptional. His attention to detail and innovative approaches significantly improved our data analysis capabilities."
    },
    // Add more testimonials as needed
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </motion.div>
  );
};

export default Testimonials;