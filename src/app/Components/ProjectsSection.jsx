"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';


const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/Placeholder1.JFIF",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project description",
        image: "/images/Placeholder2.png",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a project description",
        image: "/images/Placeholder3.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a project description",
        image: "/images/Placeholder4.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 5,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/Placeholder5.png",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 6,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/Placeholder6.png",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tags.includes(tag));

    return (
        <>
            <h2>Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-w py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    tag="All"
                    isSelected={tag == "All"}
                />
            </div>
            <div className="text-white flex flex-row justify-center items-center gap-w py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Games"
                    isSelected={tag == "Games"}
                />
            </div>
            <div className="text-white flex flex-row justify-center items-center gap-w py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Software"
                    isSelected={tag == "Software"}
                />
            </div>
            <div>{filteredProjects.map((project) =>
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgURL={project.image}
                    tags={project.tags}
                    gitURL={project.gitURL}
                    previewURL={project.previewURL}
                />
            )}
            </div>
        </>
    );
};

export default ProjectsSection;