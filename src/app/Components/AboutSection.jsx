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
        skills: ["Git", "Agile/Scrum", "OpenProject", "Asana", "Embedded Systems", "Unit and Integration Testing", "Technical Documentation", "Troubleshooting", "Debugging"],
        icon: "⚙️"
    },
    {
        title: "Engineering Skills",
        skills: ["Fusion360", "Soldering", "Prototyping", "3D Printing", "Interpreting Engineering Prints and Diagrams", "Physical Assembly", "Hardware Testing", "Statistical Analysis"],
        icon: "🔧"
    },
];
const SkillBadge = ({ skill, onSelect }) => (

    <button 
        className="inline-block bg-gray-700 text-gray-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 cursor-pointer"
        onClick={() => onSelect(skill)}
    >
        {skill}
    </button>
);

const SkillsContent = ({onSkillSelect}) => (
    <div className="space-y-6">
        {skillGroups.map((group) => (
            <div key={group.title}>
                <h4 className="text-xl font-semibold text-yellow-500 mb-3 flex items-center">
                    <span className="mr-2 text-2xl">{group.icon}</span> {group.title}
                </h4>
                <div>
                    {group.skills.map((skill) => (
                        <SkillBadge 
                            key={skill} 
                            skill={skill}
                            onSelect={onSkillSelect} />
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
        description: "Focused on Software Engineering principles, embedded systems, and game design. Furthermore, I served as the President of Kettering Gamer's Society and Kettering Investment Club, while also acting as the Marketing Chair for the Kettering Radio Club. By my last term, I had made the Dean's List."
    },
    {
        institution: "Hartland High School",
        years: "2016 - 2020",
        degree: "High School Diploma",
        description: "Put a strong emphasis on college-level STEM courses and extracurricular activities. I graduated with my Varsity letter in Academics, Theater, and Men's Varsity Choir."
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
        duration: "May '25 - Oct. '25",
        type: "Full-Time",
        bullets: [
            "Developed and maintained embedded C++ code for high-precision industrial inspection equipment.",
            "Tracked software defects using Asana and collaborated with cross-functional teams to resolve issues.",
            "Maintained software features by implementing bug fixes and enhancing existing functionality."
        ]
    },
    {
        title: "General Inspection - Application Engineer",
        duration: "Feb. '25 - May '25",
        type: "Full-Time",
        bullets: [
            "Wrote detailed test reports that demonstrated specialized inspection equipment to potential customers.",
            "Trained service technicians on software operation and troubleshooting procedures.",
            "Troubleshot and maintained Windows-based test machines.",
            "Modified high-speed sorting machines to run sample parts for customers."
        ]
    },
    {
        title: "Inspectron Tools - Software Team Intern",
        duration: "Apr. '22 - Jun. '24",
        type: "Internship",
        bullets: [
            "Performed software audits on early pre-production software releases.",
            "Carried out hardware tests such as Chemical Resistance, Battery Life-Span, and Power Cycling tests.",
            "Implemented code fixes for several user interface-related issues.",
            "Tested manufacturer samples, providing data-driven reports that impacted final production decisions."
        ]
    },
    {
        title: "JMC Industries - Controls Team Intern",
        duration: "Oct. - Dec. '21",
        type: "Internship",
        bullets: [
            "Contributed to the development of a company database for tracking parts and job orders.",
            "Physically assembled machine components based on engineering diagrams and specifications.",
            "Shadowed electrical engineers and learned how to wire high-voltage control boxes.",
            "Oversaw the operation of completed machines and troubleshot hardware issues in the field."
        ]
    },
    {
        title: "Kettering University - IGVC Project",
        duration: "Oct. - Dec. '20",
        type: "Internship",
        bullets: [
            "Collaborated on a team to document navigation software for an autonomous ground vehicle competition (IGVC).",
            "Troubleshot specific software issues and provided technical support.",
            "Bought and assembled hardware components for new development PCs.",
            "Used mySQL to set up a Moodle server for project training and documentation."
        ]
    }
];

const ExperienceContent = () => (
    <div className="space-y-4">
        {experienceData.map((job, index) => (
            <details key={index} className="p-4 rounded-lg bg-[#181818] border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                <summary className="font-semibold text-white cursor-pointer hover:text-yellow-500 transition-colors duration-300 flex justify-between items-center w-full">
                    {/* Job Title */}
                    <span className="flex-grow whitespace-nowrap overflow-hidden text-ellipsis text-sm md:text-xs sm:text-xs">{job.title}</span> 
                    
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

const AboutSection = ({ onSkillSelect }) => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-12 xl:px-16">
                <Image src="/images/Portrait_Chicago.jpg" width={500} height={500} alt="Portrait" className = "sm:max-h-96 w-full object-cover rounded-lg" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    {/* The About Me Section */}
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I&#39;m a recent Kettering University Computer Science with a minor in business, offering a unique skillset that blends programming, testing, technical writing, and mechanical engineering skills.
                        With over 5 years of industry experience across various internships and full-time roles, I bring practical knowledge in embedded systems, software testing, and product application engineering.
                        I&#39;m a detail oriented worker proficient in project management tools like OpenProject and Asana, training others, and creating resources that support team productivity. 
                        My passion for software development extends to game design and development using Unity and Unreal Engine. Lastly, I am well versed in both parametric and non-parametric 3D modeling using Fusion360 and Blender.
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