'use client';

import React from 'react';

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

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 text-transparent bg-clip-text
                animate-gradient bg-300% relative
                after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-24 after:h-1 after:bg-gradient-to-r 
                after:from-purple-400 after:via-pink-300 after:to-blue-400 after:-translate-x-1/2 after:rounded-full">
                TECH SKILLS
            </h1>
            <div className="space-y-16">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={category.title} className="space-y-8">
                        <h2 className="text-2xl font-semibold text-white/90 text-center">
                            {category.title}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                            {category.skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-4 group"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out forwards`,
                                        animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s`,
                                        opacity: 0
                                    }}
                                >
                                    <div className="relative w-20 h-20 bg-opacity-10 bg-white backdrop-blur-sm rounded-xl p-4 
                                        shadow-[0_0_15px_rgba(255,255,255,0.07)] 
                                        group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] 
                                        transition-all duration-300 ease-in-out 
                                        flex items-center justify-center 
                                        overflow-hidden
                                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 
                                        group-hover:before:opacity-100 before:transition-opacity before:duration-300"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={`${skill.name} icon`}
                                            width={48}
                                            height={48}
                                            className="max-w-full max-h-full transform group-hover:scale-110 transition-transform duration-300 relative z-10"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">{skill.name}</span>
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