// Skills.tsx
import React from 'react';
import { CardContent } from "@/sections/ui/card";
import { Icon } from '@iconify/react';
import cIcon from '@iconify/icons-logos/c';
import cppIcon from '@iconify/icons-logos/c-plusplus';
import swiftIcon from '@iconify/icons-logos/swift';
import javaIcon from '@iconify/icons-logos/java';
import firebaseIcon from '@iconify/icons-logos/firebase';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javascriptIcon from '@iconify/icons-logos/javascript';
import mySqlIcon from '@iconify/icons-logos/mysql';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import htmlIcon from '@iconify/icons-vscode-icons/file-type-html';
import cssIcon from '@iconify/icons-vscode-icons/file-type-css';
import tailwindIcon from '@iconify/icons-vscode-icons/file-type-tailwind';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import sqlIcon from '@iconify/icons-skill-icons/mysql-dark';
import linuxIcon from '@iconify/icons-logos/linux-tux';
import latexDark from '@iconify/icons-skill-icons/latex-dark';
import pythonIcon from '@iconify/icons-logos/python';
import flaskIcon from '@iconify/icons-skill-icons/flask-light';
import mongoDBIcon from '@iconify/icons-vscode-icons/file-type-mongo';
import postgresIcon from '@iconify/icons-logos/postgresql';
import pandasIcon from '@iconify/icons-devicon/pandas';
import numpyIcon from '@iconify/icons-logos/numpy';
import tensorflowIcon from '@iconify/icons-logos/tensorflow';
import pytorchIcon from '@iconify/icons-devicon/pytorch';
import sklearnIcon from '@iconify/icons-devicon/scikitlearn';
import dockerIcon from '@iconify/icons-logos/docker-icon';
import nextIcon from '@iconify/icons-skill-icons/nextjs-dark';
import threejsIcon from '@iconify/icons-skill-icons/threejs-light';
import expressIcon from '@iconify/icons-skill-icons/expressjs-light';

export const languages = [
    { icon: pythonIcon, label: 'Python' },
    { icon: typescriptIcon, label: 'TypeScript' },
    { icon: javascriptIcon, label: 'JavaScript' },
    { icon: javaIcon, label: 'Java' },
    { icon: swiftIcon, label: 'Swift' },
    { icon: sqlIcon, label: 'SQL' },
    { icon: cIcon, label: 'C' },
    { icon: cppIcon, label: 'C++' },
    { icon: htmlIcon, label: 'HTML' },
    { icon: cssIcon, label: 'CSS' },
];

export const frameworksAndTools = [
    { icon: reactIcon, label: 'React' },
    { icon: nextIcon, label: 'Next.js' },
    { icon: nodejsIcon, label: 'Node.js' },
    { icon: tailwindIcon, label: 'Tailwind CSS' },
    { icon: flaskIcon, label: 'Flask' },
    { icon: expressIcon, label: 'Express.js' },
    { icon: mySqlIcon, label: 'MySQL' },
    { icon: mongoDBIcon, label: 'MongoDB' },
    { icon: firebaseIcon, label: 'Firebase' },
    { icon: threejsIcon, label: 'Three.js' },
    { icon: bootstrapIcon, label: 'Bootstrap' },
    { icon: postgresIcon, label: 'PostgreSQL' },
    { icon: pandasIcon, label: 'Pandas' },
    { icon: pytorchIcon, label: 'PyTorch' },
    { icon: numpyIcon, label: 'NumPy' },
    { icon: tensorflowIcon, label: 'TensorFlow' },
    { icon: sklearnIcon, label: 'SKlearn' },
    { icon: dockerIcon, label: 'Docker' },
    { icon: latexDark, label: 'LaTeX' },
    { icon: linuxIcon, label: 'Linux' },
    { icon: 'skill-icons:aws-light', label: 'AWS' },
    { icon: 'logos:aws-s3', label: 'Amazon S3' },
];

export const SkillsSection = () => {
    return (
        <section id="skills">
        <div className="container">
            <div className="flex justify-center">
                <h2 className="font-serif text-3xl md:text-5xl text-center my-6">Skills</h2>

            </div>
            <CardContent>
                {/* Section for Languages with line and text above */}
                <div className="relative mb-8">
                    <h3 className="text-2xl uppercase font-semibold relative z-10 inline-block px-4 tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        Languages
                    </h3>
                </div>
                <div className="grid lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-6 justify-items-center">
                    {languages.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <Icon
                                icon={skill.icon}
                                className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span
                                className="
                    text-lg 
                    text-center
                    w-full
                    opacity-100 translate-y-0 
                    lg:opacity-0 lg:translate-y-2 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-300
                  "
                            >
                                {skill.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Section for Libraries & Tools with line and text above */}
                <div className="relative mt-16 mb-8">
                    <h3 className="text-2xl uppercase font-semibold relative z-10 inline-block px-4 tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                        Libraries & Tools
                    </h3>
                </div>
                <div className="grid lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-6 justify-items-center">
                    {frameworksAndTools.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <Icon
                                icon={skill.icon}
                                className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span
                                className="
                    text-lg 
                    text-center
                    w-full
                    opacity-100 translate-y-0 
                    lg:opacity-0 lg:translate-y-2 
                    group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-300
                  "
                            >
                                {skill.label}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </div>
        </section>
    );
};
