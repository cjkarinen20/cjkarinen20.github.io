"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
import ProjectModal from './ProjectModal';



const projectsData = [
    {
        id: 1,
        title: "C++ Raycaster Engine",
        description: "A Wolfenstein-style game engine developed in C++ and OpenGL.",
        fullDescription: "The C++ Raycaster Engine is a retro 3D game engine with a simple map editor, written in C++ and OpenGL. This engine utilizes classic raycasting techniques to render 3D environments from a 2D map, allowing for real-time rendering of psuedo-3D walls, sprites, and textures. It features basic player movement, collision detection, texture mapping, AI Enemies, interactable doors, simple key puzzle mechanics, a skybox, and a map editor. The project showcases fundamental graphics programming concepts and served as a learning tool for me to understand the basics of 3D rendering and game engine architecture.",
        image: "/images/Raycaster_Preview.png",
        tags: ["All", "Software"],
        subtags : ["C++", "OpenGL", "Git", "Graphics Programming", "Game Engine Development"],
        gallery: ["/images/Raycaster_Preview.png", "/images/projects/raycaster/Ray_LevelCreator.png", "/images/projects/raycaster/Ray_TitleCard.png","/images/projects/raycaster/Ray_Corridor1.png", "/images/projects/raycaster/Ray_Key.png", "/images/projects/raycaster/Ray_Light.png", "/images/projects/raycaster/Ray_Enemy1.png", "/images/projects/raycaster/Ray_GameOver.png"],
        gitURL: "https://github.com/cjkarinen20/CPP_Raycaster_Engine",
        previewURL: "/",

    },
    {
        id: 2,
        title: "Voice Of The Valley",
        description: "A narrative horror game developed for Itch.io ScreamJam 2024.",
        fullDescription: "Voice Of The Valley is a first-person narrative horror game developed for Itch.io ScreamJam 2024. Players explore an empty reservation, uncovering a chilling story as they navigate through environmental puzzles. The game emphasizes atmosphere, storytelling and exploration, creating an immersive experience that keeps players on edge.",
        image: "/images/VoiceOfTheValley.png",
        tags: ["All", "Games"],
        subtags : ["Unity", "Git", "ProBuilder", "C#", "Level Design", "Narrative Design"],
        gallery: ["/images/VoiceOfTheValley.png", "/images/projects/votv/VOTV_Bar.png", "/images/projects/votv/VOTV_CliffOverlook.png", "/images/projects/votv/VOTV_Crowbar.gif", "/images/projects/votv/VOTV_Fall.gif", "/images/projects/votv/VOTV_GunPOV.png", "/images/projects/votv/VOTV_Mine.png", "/images/projects/votv/VOTV_MineEntrance.png", "/images/projects/votv/VOTV_Tents.png"],
        gitURL: "https://github.com/cjkarinen20/ScreamJam2024",
        previewURL: "https://austen-kinney.itch.io/voiceofthevalley",

    },
    {
        id: 3,
        title: "Liminality",
        description: "A liminal space inspired found footage horror game.",
        fullDescription: "Liminality is a first-person exploration horror game set in eerie, transitional spaces that evoke a sense of unease and nostalgia. Inspired by the concept of liminal spaces, the game immerses players in unsettling environments where they must navigate through abandoned buildings, empty hallways, and surreal landscapes. The gameplay focuses on exploration, environmental storytelling, and atmospheric tension, creating a unique horror experience that lingers in the mind long after playing.",
        image: "/images/LiminalityPreview.png",
        tags: ["All", "Games"],
        subtags : ["Unity", "Git", "ProBuilder", "C#", "Level Design", "Narrative Design"],
        gallery: ["/images/projects/liminality/Lim_PoolHall.png","/images/projects/liminality/Lim_DarkRoom.png", "/images/projects/liminality/Lim_FantasyPool.png", "/images/projects/liminality/Lim_ReservoirRoom.png", "/images/projects/liminality/Lim_TunnelRoom.png", "/images/projects/liminality/Lim_AsylumTunnel.png"],
        gitURL: "https://github.com/cjkarinen20/LiminalityHDRP",
        previewURL: "https://rattl3bones.itch.io/liminality",

    },
    {
        id: 4,
        title: "Drop Dead",
        description: "A cooperative 4-player zombie survival board game.",
        fullDescription: "Drop Dead is an intense cooperative board game designed for 1 to 4 players, where players work together to survive waves of zombie attacks while completing various objectives. Set in a post-apocalyptic world, players must strategize, manage resources, and utilize unique character abilities to fend off the undead and achieve victory. The game features modular board layouts, diverse enemy types, and a dynamic event system that keeps each playthrough fresh and challenging.",
        image: "/images/DropDeadPreview.jpg",
        tags: ["All", "Games"],
        subtags : ["Game Design", "Gameplay Design", "Art Design", "Technical Writing"],
        gallery: ["/images/DropDeadPreview.jpg", "/images/projects/dropdead/DD_ExampleGame1.jpg", "/images/projects/dropdead/DD_ExampleGame2.jpg", "/images/projects/dropdead/DD_AllPieces1.jpg", "/images/projects/dropdead/DD_BoxSpread1.jpg", "/images/projects/dropdead/DD_Minis.jpg"],
        gitURL: "/documents/DropDead_Rulebook.pdf",
        previewURL: "/documents/DropDead_SellSheet.pdf",

    },

      {
        id: 5,
        title: "Whack-A-Bot VR",
        description: "Scaled up version of the classic arcade game in VR.",
        fullDescription: "Whack-A-Bot VR is an immersive virtual reality adaptation of the classic arcade game, where players use motion controllers to whack robotic targets that pop up in a vibrant, futuristic setting. The game features multiple levels with increasing difficulty, diverse robot designs, and engaging sound effects to enhance the experience. Players can enjoy solo play or compete with friends for high scores, making it a fun and energetic VR experience suitable for all ages.",
        image: "/images/WABVR_Preview.png",
        tags: ["All", "Games"],
        subtags : ["Unity", "VR", "Git", "ProBuilder", "C#", "Level Design", "Gameplay Design"],
        gallery: ["/images/WABVR_Preview.png", "/images/projects/wbvr/WBVR_Crouching.png", "/images/projects/wbvr/WBVR_FinalMainScene.png", "/images/projects/wbvr/WBVR_FinalMainScene2.png", "/images/projects/wbvr/WBVR_POVShot.png", "/images/projects/wbvr/WBVR_SceneView.png"],
        gitURL: "https://github.com/nocteardor/cs420-bk-vrgame",
        previewURL: "/documents/WABVR_TechincalReport.pdf",

    },
];

const ProjectsSection = ({ activeSkillFilter }) => {
    const [tag, setTag] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null); 
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
    
    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const filteredProjects = projectsData.filter((project) =>
    {
        const passesMainTag = project.tags.includes(tag);

        const passesSkillFilter = activeSkillFilter === "" ||
            (project.subtags && project.subtags.includes(activeSkillFilter));

        return passesMainTag && passesSkillFilter;  
    });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="projects">
            
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
                            subtags={project.subtags || []} // Pass subtags
                            onExpand={() => openModal(project)} 
                        />
                    </motion.li>
                ))}
            </ul>
            
            <ProjectModal 
                project={selectedProject} 
                onClose={closeModal} 
            />
        </section>
    );
};

export default ProjectsSection;