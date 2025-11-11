"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const skillGroups = [
    {
        title: "Coding Languages",
        skills: ["Java", ".NET Framework","C/C++/C#", "Python", "JavaScript", "Haskell"],
        icon: "💻"
    },
    {
        title: "Web/DB",
        skills: ["React", "Next.js", "HTML/CSS", "mySQL"],
        icon: "🌐"
    },
    {
        title: "3D Tools",
        skills: ["Unity", "Unreal Engine", "Blender"],
        icon: "🎮"
    },
    {
        title: "Software Skills",
        skills: ["Git", "Agile/Scrum", "Embedded Systems", "Unit and Integration Testing", "Technical Documentation", "Troubleshooting", "Debugging"],
        icon: "⚙️"
    },
    {
        title: "Engineering Skills",
        skills: ["Physical Assembly", "Soldering", "Prototyping", "3D Printing", "Interpreting Engineering Prints and Diagrams", "Fusion360", "Hardware Testing", "Statistical Analysis"],
        icon: "🔧"
    },
];
const SkillBadge = ({ skill }) => (
    <span className="inline-block bg-gray-700 text-gray-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300">
        {skill}
    </span>
);

const SkillsContent = () => (
    <div className="space-y-6">
        {skillGroups.map((group) => (
            <div key={group.title}>
                <h4 className="text-xl font-semibold text-yellow-500 mb-3 flex items-center">
                    <span className="mr-2 text-2xl">{group.icon}</span> {group.title}
                </h4>
                <div>
                    {group.skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);
const educationData = [
    {
        institution: "Kettering University",
        years: "2020 - 2024",
        degree: "B.S. Computer Science, Minor in Business",
        description: "Focused on Software Engineering principles, embedded systems, and game design."
    },
    {
        institution: "Hartland High School",
        years: "2016 - 2020",
        degree: "High School Diploma",
        description: "Achieved high honors and focused on STEM courses."
    }
];

const EducationContent = () => (
    <ol className="relative border-l border-yellow-500 ml-4">
        {educationData.map((item, index) => (
            <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-yellow-500">
                    <span className="text-white text-xs">🎓</span>
                </span>
                <p className="text-sm text-gray-400">{item.years}</p>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{item.institution}</h3>
                <p className="mb-4 text-base font-normal text-yellow-300">{item.degree}</p>
                <p className="text-gray-400">{item.description}</p>
            </li>
        ))}
    </ol>
);
const experienceData = [
     {
        title: "General Inspection - Software Test Engineer",
        duration: "May 2025 - Oct. 2025",
        type: "Full-Time",
        bullets: [
            "Developed and maintained embedded C++ code for high-precision industrial inspection equipment.",
            "Designed and implemented automated software testing protocols, reducing bug report time by 40%.",
            "Contributed to Agile planning and sprint review sessions for cross-functional project teams."
        ]
    },
    {
        title: "General Inspection - Application Engineer",
        duration: "Feb. 2025 - May 2025",
        type: "Full-Time",
        bullets: [
            "Developed and maintained embedded C++ code for high-precision industrial inspection equipment.",
            "Designed and implemented automated software testing protocols, reducing bug report time by 40%.",
            "Contributed to Agile planning and sprint review sessions for cross-functional project teams."
        ]
    },
    {
        title: "Inspectron Tools - Software Team Intern",
        duration: "April 2022 - June 2024",
        type: "Internship",
        bullets: [
            "Developed and maintained embedded C++ code for high-precision industrial inspection equipment.",
            "Designed and implemented automated software testing protocols, reducing bug report time by 40%.",
            "Contributed to Agile planning and sprint review sessions for cross-functional project teams."
        ]
    },
    {
        title: "JMC Industries - Controls Team Intern",
        duration: "October - December 2021",
        type: "Internship",
        bullets: [
            "Assisted in wiring and programming PLCs (Programmable Logic Controllers) for custom automation solutions.",
            "Created HMI (Human-Machine Interface) systems for facility controls.",
        ]
    },
    {
        title: "Kettering University - IGVC Project",
        duration: "October - December 2020",
        type: "Internship",
        bullets: [
            "Collaborated on a team to develop navigation software for an autonomous ground vehicle competition (IGVC).",
            "Programmed sensor fusion algorithms in Python for accurate pathfinding."
        ]
    }
];

const ExperienceContent = () => (
    <div className="space-y-4">
        {experienceData.map((job, index) => (
            <details key={index} className="p-4 rounded-lg bg-[#181818] border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                <summary className="font-semibold text-white cursor-pointer hover:text-yellow-500 transition-colors duration-300 flex justify-between items-center w-full pr-4">
                    {/* Job Title */}
                    <span className="flex-grow whitespace-nowrap overflow-hidden text-ellipsis">{job.title}</span> 
                    
                    {/* Duration */}
                    <span className="text-xs text-gray-400 ml-4 flex-shrink-0 text-right">
                        ({job.duration})
                        <br className="sm:hidden" /> 
                        <span className="inline-block sm:ml-2 font-medium text-yellow-300">
                           {job.type}
                        </span>
                    </span>
                </summary>
                <ul className="list-disc pl-6 mt-3 text-gray-400 space-y-2">
                    {job.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm">{bullet}</li>
                    ))}
                </ul>
            </details>
        ))}
    </div>
);
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: <SkillsContent />, 
    },
    {
        title: "Education",
        id: "education",
        content: <EducationContent />, 
    },
    {
        title: "Experience",
        id: "experience",
        content: <ExperienceContent />, 
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/Portrait_Chicago.jpg" width={500} height={500} alt="Portrait" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    {/* The About Me Section */}
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I&#39;m a recent Kettering University graduate with a degree in Computer Science and a minor in business.
                        I&#39;m a detail-oriented worker, a creative thinker, and experienced in managing small teams and projects.
                        I have over 3 years of industry experience in embedded programming, software testing, and systems design.
                        Additionally, I have personal and academic experience in game design, level design, environmental modelling, and systems programming.
                    </p>

                    {/* Tab Buttons */}
                    <div className="flex flex-row justify-start mt-8 space-x-4">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                    </div>

                    {/* Tab Content Display */}
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;