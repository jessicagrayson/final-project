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
    <div className="flex flex-col items-center w-2/3 p-4 m-6 mx-auto space-y-3 text-lg rounded-sm bg-slate-100">
      <p className="px-6 mx-5">
        Gophr is a full-stack photo blogging web application built by Jessica
        Grayson with a little help from the following resources and
        technologies:
      </p>
      <div className="flex flex-row py-4 space-x-5">
        <ul className="list-disc">
          <h1 className="mb-2 font-semibold">Tech Stack:</h1>
          {technologies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="list-disc">
          <h1 className="mb-2 font-semibold">Resources:</h1>

          {resources.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
