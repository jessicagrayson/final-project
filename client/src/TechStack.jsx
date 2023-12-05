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
    'SQL',
    'Argon',
    'JWT',
    'Elastic Beanstalk',
  ];

  const resources = [
    'Figma',
    'DBDiagram',
    'Vite',
    'Visual Studio Code',
    'Github',
  ];

  return (
    <div className="flex flex-col items-center w-2/3 p-4 m-6 space-y-3 text-lg rounded-sm bg-slate-100">
      <p>
        Gophr is a full-stack photo blogging web application built by Jessica
        Grayson with a little help from the following resources and
        technologies:
      </p>
      <ul className="list-disc">
        <h1 className="font-semibold">Tech Stack:</h1>
        {technologies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul className="list-disc">
        <h1 className="font-semibold">Resources:</h1>

        {resources.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
