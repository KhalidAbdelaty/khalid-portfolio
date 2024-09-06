import React from 'react';

const SkillCategory = ({ category, skills }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{category}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Python", "C++", "SQL"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Microsoft Azure", "Git", "GitHub", "Azure Machine Learning Designer"]
    },
    {
      category: "Cloud Platforms",
      skills: ["Microsoft Azure", "Oracle Cloud", "Google Cloud"]
    },
    {
      category: "Other Skills",
      skills: ["Machine Learning", "Data Analysis", "AI Model Development", "Project Management", "Leadership", "Team Collaboration", "Problem Solving", "Effective Communication"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      {skillsData.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default Skills;