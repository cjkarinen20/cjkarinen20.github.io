import React from 'react';
import Link from 'next/link';
import ProjectTag from './ProjectTag';


const ProjectCard = ({ imgURL, title, description, subtags, onExpand }) => {
    return (
        <div 
            onClick={onExpand} 
            className="cursor-pointer group hover:shadow-xl hover:shadow-yellow-500/30 transition-shadow duration-300"
        >
            <div
                className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
                style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
            >
                {/* The overlay is now just a subtle darken effect, no clickable icons */}
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                    {/* 'View Details' prompt on hover */}
                    <span className="absolute bottom-4 left-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details →
                    </span>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE] mb-3">{description}</p>
                
                {/* Display Subtags */}
                <div className="flex flex-wrap gap-2">
                    {subtags.slice(0, 4).map((tag, index) => ( // Show max 4 subtags
                        <span key={index} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-lg">
                            {tag}
                        </span>
                    ))}
                    {subtags.length > 4 && (
                        <span className="text-xs px-2 py-1 text-gray-400">+{subtags.length - 4} more</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;