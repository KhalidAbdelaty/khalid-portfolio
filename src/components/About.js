import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          I'm Khalid Abdelaty, a Computer Science student at Tanta University with a passion for data engineering and AI. 
          As a Microsoft Student Ambassador, I'm dedicated to promoting technology and fostering a community of learners.
        </p>
        <p className="mb-4">
          My experience includes a virtual internship with Microsoft, where I worked on AI models and data analysis. 
          I'm currently preparing for a Data Engineer Internship with DEPI, focusing on expanding my skills in SQL, 
          Python, and cloud technologies.
        </p>
        <p>
          I'm always eager to take on new challenges and contribute to innovative projects in the field of data 
          engineering and machine learning.
        </p>
      </div>
    </div>
  );
};

export default About;