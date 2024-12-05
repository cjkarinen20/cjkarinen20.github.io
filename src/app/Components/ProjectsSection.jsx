"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";



const projectsData = [
    {
        id: 1,
        title: "Voice Of The Valley",
        description: "A narrative horror game developed for Itch.io ScreamJam 2024.",
        image: "/images/VoiceOfTheValley.png",
        tags: ["All", "Games"],
        gitURL: "https://github.com/cjkarinen20/ScreamJam2024",
        previewURL: "https://austen-kinney.itch.io/voiceofthevalley",

    },
    {
        id: 2,
        title: "Liminality",
        description: "A liminal space inspired found footage horror game.",
        image: "/images/LiminalityPreview.png",
        tags: ["All", "Games"],
        gitURL: "https://github.com/cjkarinen20/LiminalityHDRP",
        previewURL: "https://rattl3bones.itch.io/liminality",

    },
    {
        id: 3,
        title: "Whack-A-Bot VR",
        description: "Scaled up version of the classic arcade game in VR.",
        image: "/images/WABVR_Preview.png",
        tags: ["All", "Games"],
        gitURL: "https://github.com/nocteardor/cs420-bk-vrgame",
        previewURL: "/documents/WABVR_TechincalReport.pdf",

    },
    {
        id: 4,
        title: "Drop Dead",
        description: "A cooperative 4-player zombie survival board game.",
        image: "/images/DropDeadPreview.jpg",
        tags: ["All", "Games"],
        gitURL: "/documents/DropDead_Rulebook.pdf",
        previewURL: "/documents/DropDead_SellSheet.pdf",

    },
    {
        id: 5,
        title: "C++ Raycaster Engine",
        description: "A Wolfenstein-style game engine developed in C++ and OpenGL.",
        image: "/images/Raycaster_Preview.png",
        tags: ["All", "Software"],
        gitURL: "https://github.com/cjkarinen20/CPP_Raycaster_Engine",
        previewURL: "/",

    },
    /*
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
    */
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