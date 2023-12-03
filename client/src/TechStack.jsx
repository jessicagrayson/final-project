import React from 'react';

export default function TechStack() {
  const technologies = [
    'JavaScript',
    'PostgreSQL',
    'Express',
    'React',
    'Node',
    'CSS',
    'Tailwind',
    'Material UI',
    'AWS',
    'React Router',
    'Multer',
    'Figma',
    'DBDiagram',
    'Vite',
    'SQL',
    'Argon',
    'JWT',
    'Elastic Beanstalk',
    'Visual Studio Code',
    'Github',
  ];

  return (
    <div>
      <p>
        Gophr is a full-stack photo blogging web application built by Jessica
        Grayson with a little help from the following resources and
        technologies:
      </p>
      <ul>
        {technologies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
