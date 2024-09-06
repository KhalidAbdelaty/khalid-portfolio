import React from 'react';

const ExperienceItem = ({ title, company, date, description }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{company} | {date}</p>
    <ul className="list-disc list-inside mt-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Microsoft Data Engineer Intern",
      company: "DEPI - Hybrid Remote",
      date: "Jun 2024 – Oct 2024 (Expected)",
      description: [
        "Ongoing training in data engineering, including completion of Microsoft SQL Essentials.",
        "Enrolled in courses on Python Programming Fundamentals, Agile Development and Scrum, Azure Data Fundamentals, and MLOps Tools.",
        "Hands-on experience with tools like MLflow, Hugging Face, and preparation for Azure Data Engineer Associate certification."
      ]
    },
    {
      title: "Virtual Internship",
      company: "Microsoft Remote",
      date: "Jun 2023 – Aug 2023",
      description: [
        "Set up environments on Azure and designed AI models for image recognition and price prediction.",
        "Developed machine learning models using Azure Machine Learning Designer.",
        "Conducted data analysis and visualizations to support model development."
      ]
    },
    {
      title: "Beta Microsoft Student Ambassador",
      company: "Microsoft Remote",
      date: "Jan 2024 – Present",
      description: [
        "Served as a brand ambassador, promoting Microsoft products and technologies to the student community.",
        "Organized and facilitated workshops and hackathons to help students learn and explore Microsoft technologies.",
        "Provided feedback and insights to Microsoft on student needs and preferences.",
        "Collaborated with other student ambassadors to create and share educational content."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;