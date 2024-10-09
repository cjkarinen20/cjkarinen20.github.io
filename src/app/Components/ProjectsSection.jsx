import React from 'react';
import ProjectCard from './ProjectCard';


const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/placeholder1.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project description",
        image: "/images/placeholder2.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a project description",
        image: "/images/placeholder3.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a project description",
        image: "/images/placeholder4.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 5,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/placeholder5.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 6,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/placeholder6.jpg",
        tags: ["All", "Web"],
        gitURL: "/",
        previewURL: "/",

    }
];

const ProjectsSection = () => {
    return (
        <>
            <h2>Projects</h2>
            <div>{projectsData.map((project) =>
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgURL={project.image}
                />
            )}
            </div>
        </>
    );
};

export default ProjectsSection;