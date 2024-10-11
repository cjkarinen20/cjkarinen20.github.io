"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";



const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project description",
        image: "/images/Placeholder1.png",
        tags: ["All", "Games"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project description",
        image: "/images/Placeholder2.png",
        tags: ["All", "Games"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a project description",
        image: "/images/Placeholder3.jpg",
        tags: ["All", "Games"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a project description",
        image: "/images/Placeholder4.jpg",
        tags: ["All", "Software"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 5,
        title: "Project 5",
        description: "This is a project description",
        image: "/images/Placeholder5.png",
        tags: ["All", "Software"],
        gitURL: "/",
        previewURL: "/",

    },
    {
        id: 6,
        title: "Project 6",
        description: "This is a project description",
        image: "/images/Placeholder6.png",
        tags: ["All", "Software"],
        gitURL: "/",
        previewURL: "/",

    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tags.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    tag="All"
                    isSelected={tag == "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Games"
                    isSelected={tag == "Games"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Software"
                    isSelected={tag == "Software"}
                />
            </div >
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) =>
                (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >


                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgURL={project.image}
                            tags={project.tags}
                            gitURL={project.gitURL}
                            previewURL={project.previewURL}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;