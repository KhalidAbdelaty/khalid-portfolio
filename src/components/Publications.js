import React from 'react';
import { motion } from 'framer-motion';

const PublicationCard = ({ title, description, link, date }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 mb-6"
  >
    <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
    <p className="mb-2 text-gray-600 dark:text-gray-300">{description}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 hover:underline"
    >
      Read More
    </a>
  </motion.div>
);

const Publications = () => {
  const publications = [
    {
      title: "Integrating Power BI with Azure Data Services",
      description: "Explored leveraging the combination of Power BI and Azure for real-time business insights.",
      link: "https://techcommunity.microsoft.com/t5/educator-developer-blog/integrating-power-bi-with-azure-data-services/ba-p/4173651?wt.mc_id=studentamb_332722", // Replace with actual link
      date: "June 2024"
    },
    // Add more publications as needed
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Publications</h2>
      {publications.map((pub, index) => (
        <PublicationCard key={index} {...pub} />
      ))}
    </motion.div>
  );
};

export default Publications;