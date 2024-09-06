import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white shadow-lg rounded-lg p-6 mb-6 transition duration-300 ease-in-out transform hover:shadow-xl"
  >
    <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h3>
    <p className="mb-4 text-gray-700">{description}</p>
    <div className="flex flex-wrap">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Data Processing Pipeline",
      description: "Developed a robust data processing pipeline to clean and analyze large datasets, implementing machine learning algorithms for insightful extractions.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization"]
    },
    {
      title: "End-to-End Data Engineering Solution",
      description: "Designed and implemented a comprehensive data engineering solution with ETL pipelines, leveraging cloud technologies for scalable data storage and processing.",
      technologies: ["Python", "SQL", "ETL", "Azure", "Big Data"]
    },
    {
      title: "Predictive Modeling System",
      description: "Created a predictive modeling system using advanced linear regression techniques, with data preprocessing via Pandas and model implementation through Scikit-learn.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Linear Regression", "Data Analysis"]
    },
    {
      title: "Titanic Survival Predictor",
      description: "Engineered a machine learning model to predict survival rates on the Titanic, achieving an impressive 85% accuracy on the test dataset.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Classification Algorithms"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;