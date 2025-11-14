'use client';

import React from 'react';
import {useTranslations} from "next-intl";

const TechSkills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: 'JavaScript', icon: '/skills/JavaScript.png', color: 'rgb(247, 223, 30)' },
                { name: 'TypeScript', icon: '/skills/TypeScript.png', color: 'rgb(49, 120, 198)' },
                { name: 'Python', icon: '/skills/python.png', color: 'rgb(55, 118, 171)' },
                { name: 'Java', icon: '/skills/java.png', color: 'rgb(229, 76, 34)' },
                { name: 'C++', icon: '/skills/cpp.png', color: 'rgb(0, 89, 156)' },
                { name: 'C#', icon: '/skills/csharp.png', color: 'rgb(104, 33, 122)' },
                { name: 'Rust', icon: '/skills/rust.png', color: 'rgb(230, 77, 43)' }
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: 'React', icon: '/skills/react.png', color: 'rgb(97, 219, 251)' },
                { name: 'Node.js', icon: '/skills/nodejs.png', color: 'rgb(131, 205, 41)' },
                { name: 'Express', icon: '/skills/Express.png', color: 'rgb(65, 65, 65)' },
                { name: 'Angular', icon: '/skills/angular.png', color: 'rgb(220, 50, 47)' },
                { name: '.NET Core', icon: '/skills/_net_core.png', color: 'rgb(92, 45, 145)' }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: 'PostgreSQL', icon: '/skills/PostgresSQL.png', color: 'rgb(51, 103, 145)' },
                { name: 'MySQL', icon: '/skills/MySQL.png', color: 'rgb(68, 121, 161)' },
                { name: 'MongoDB', icon: '/skills/mongodb.png', color: 'rgb(0, 237, 100)' },
                { name: 'DynamoDB', icon: '/skills/dynamodb.svg', color: 'rgb(68, 121, 161)' }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: 'Docker', icon: '/skills/Docker.png', color: 'rgb(13, 150, 243)' },
                { name: 'Git', icon: '/skills/git.png', color: 'rgb(240, 80, 50)' },
                { name: 'VS Code', icon: '/skills/VsCode.png', color: 'rgb(0, 122, 204)' },
                { name: 'AWS', icon: '/skills/aws.png', color: 'rgb(255, 153, 0)' },
                { name: 'Azure', icon: '/skills/Azure.png', color: 'rgb(0, 127, 255)' },
                { name: 'Linux', icon: '/skills/linux.png', color: 'rgb(255, 221, 0)' },
                { name: 'Postman', icon: '/skills/Postman.png', color: 'rgb(255, 108, 55)' }
            ]
        }
    ];

    const navT = useTranslations('navbar');

    return (
        <div className="w-full space-y-16">
            <div className="section-heading">
                <span className="eyebrow">capabilities</span>
                <h2><span>{navT('knowledge')}</span></h2>
                <p className="max-w-2xl text-base text-slate-300/80">
                    A curated toolbox of languages, frameworks, and platforms I rely on to turn complex problems into shipping software.
                </p>
            </div>
            <div className="space-y-14">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={category.title} className="space-y-8">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                            <span className="rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300/80">
                                focus {String(categoryIndex + 1).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="glow-card group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition duration-500 hover:-translate-y-1"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out forwards`,
                                        animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s`,
                                        opacity: 0
                                    }}
                                >
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.45)]">
                                        <img
                                            src={skill.icon}
                                            alt={`${skill.name} icon`}
                                            width={48}
                                            height={48}
                                            className="max-w-full max-h-full transform transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-slate-100/90">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechSkills;
