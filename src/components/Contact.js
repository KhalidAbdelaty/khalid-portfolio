import React from 'react';

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center mb-4">
    <span className="text-2xl mr-4">{icon}</span>
    <div>
      <p className="font-semibold">{label}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ContactItem 
          icon="📧"
          label="Email"
          value="khalidabdelatty80@outlook.com"
          link="mailto:khalidabdelatty80@outlook.com"
        />
        <ContactItem 
          icon="📱"
          label="Phone"
          value="+201026782767"
          link="tel:+201026782767"
        />
        <ContactItem 
          icon="🔗"
          label="LinkedIn"
          value="linkedin.com/in/khalidabdelaty"
          link="https://linkedin.com/in/khalidabdelaty"
        />
        <ContactItem 
          icon="💻"
          label="GitHub"
          value="github.com/KhalidAbdelaty"
          link="https://github.com/KhalidAbdelaty"
        />
      </div>
    </div>
  );
};

export default Contact;