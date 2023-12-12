import React from 'react';
import LinkComponent from './LinkComponent';

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
    'React Router',
    'Multer',
    'JWT',
    'SQL',
    'Argon',
    'Elastic Beanstalk',
    'AWS',
  ];

  const resources = [
    'DBDiagram',
    'Figma',
    'Github',
    'Visual Studio Code',
    'Vite',
  ];

  return (
    <div className="flex flex-col items-center w-2/3 p-4 m-6 mx-auto space-y-3 text-lg rounded-sm bg-slate-100">
      <p>
        Gophr is a full-stack photo blogging web application built by Jessica
        Grayson with a little help from the following resources and
        technologies:
      </p>
      <div className="flex flex-row py-4 space-x-5">
        <div className="w-1/2">
          <ul className="list-disc">
            <h1 className="mb-2 font-semibold">Tech Stack:</h1>
            {technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 ">
          <ul className="list-disc">
            <h1 className="mb-2 font-semibold">Resources:</h1>
            {resources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <LinkComponent
          to="/"
          placeholder="Homepage"
          className="text-lg tracking-wide text-indigo-500 hover:underline"
        />
      </div>
    </div>
  );
}
