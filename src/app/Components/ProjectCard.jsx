import React from 'react';
import Link from 'next/link';
import ProjectTag from './ProjectTag';


const ProjectCard = ({ imgURL, title, description, subtags, onExpand }) => {
    return (
        <div 
            onClick={onExpand} 
            className="cursor-pointer group h-full rounded-xl bg-[#181818] 
                       hover:shadow-xl hover:shadow-yellow-500/30 transition-shadow duration-300 
                       overflow-hidden flex flex-col"
        >
            <div
                className="h-52 md:h-72 relative group rounded-t-xl"
                style={{ background: `url(${imgURL})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                    <span className="absolute bottom-4 left-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details →
                    </span>
                </div>
            </div>
            
            <div className="text-white py-4 px-4 flex flex-col justify-between flex-grow"> 
                
                <div>
                    <h5 className="font-xl font-semibold mb-2 truncate">{title}</h5>
                    <p className="text-[#ADB7BE] mb-3 h-12 overflow-hidden line-clamp-2">{description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 h-8 overflow-hidden pt-1"> 
                    {subtags.slice(0, 4).map((tag, index) => (
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