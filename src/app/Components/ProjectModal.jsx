"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import new Font Awesome icons for documents and links
import { faTimes, faCode, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { Tooltip } from 'react-tooltip'; // Import Tooltip
import ImageGalleryViewer from './ImageGalleryViewer'; 

// Handles Tooltips, Icons, and Size adjustment
const ProjectLink = ({ type, url, label, icon }) => {
    const iconClass = "w-5 h-5"; 
    
    // Determine the icon and tooltip text based on the link type
    let displayIcon, tooltipText;
    
    if (type === "github") {
        displayIcon = faGithub;
        tooltipText = "View Source Code (GitHub)";
    } else if (type === "itchio") {
        displayIcon = faItchIo;
        tooltipText = "Play/View Game on Itch.io";
    } else if (type === "preview") {
        displayIcon = faExternalLinkAlt;
        tooltipText = "Preview";
    } else if (type === "document") {
        displayIcon = icon || faFileAlt; // Use custom icon or default file icon
        tooltipText = label; // Use the document label as the tooltip
    }

    // Generate unique ID for the tooltip to prevent conflicts
    const tooltipId = `tooltip-${url.replace(/[^a-zA-Z0-9]/g, '-')}`;

    return (
        <Link 
            href={url} 
            target="_blank" 
            className="text-white bg-gray-700 px-2 py-1.5 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-300"
            data-tooltip-id={tooltipId}
            data-tooltip-content={tooltipText}
            data-tooltip-place="bottom"
        >
            <FontAwesomeIcon icon={displayIcon} className={iconClass} />
            <Tooltip id={tooltipId} />
        </Link>
    );
};

const ProjectModal = ({ project, onClose }) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const openViewer = (index) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    const closeViewer = () => {
        setIsViewerOpen(false);
    };

    const handleNavigate = (direction) => {
        const total = project.gallery.length;
        setCurrentImageIndex(prevIndex => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                newIndex = total - 1; 
            } else if (newIndex >= total) {
                newIndex = 0; 
            }
            return newIndex;
        });
    };
    
    return (
        <>
            <div className="fixed inset-0 z-40 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
                <div 
                    className="bg-[#192029] rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        className="absolute top-2 right-2 m-2 text-white text-3xl p-2 rounded-full bg-gray-800 hover:bg-yellow-500 transition-colors"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <div className="p-5">
                        
                        {/* Title and Links */}
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                            <div className="flex space-x-3 mt-1 flex-shrink-0">
                                {/* Standard Links (GitHub, Itch.io, Preview) */}
                                {project.links && project.links.map((link, index) => (
                                    <ProjectLink key={index} type={link.type} url={link.url} />
                                ))}
                                
                                {/* Document Links */}
                                {project.documents && project.documents.map((doc, index) => (
                                    <ProjectLink 
                                        key={`doc-${index}`} 
                                        type="document" 
                                        url={doc.url} 
                                        label={doc.label} 
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Subtags/Skills */}
                        <div className="mb-6 flex flex-wrap gap-2">
                            {project.subtags && project.subtags.map((tag, index) => (
                                <span key={index} className="text-xs px-3 py-1 bg-yellow-500 text-gray-900 font-semibold rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Full Description */}
                        <p className="text-[#ADB7BE] mb-8 whitespace-pre-wrap">{project.fullDescription}</p>

                        {/* Image Gallery */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Image Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.gallery && project.gallery.map((imgSrc, index) => (
                                    <div 
                                        key={index}
                                        className="relative w-full aspect-video cursor-pointer rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
                                        onClick={() => openViewer(index)} 
                                    >
                                        <Image
                                            src={imgSrc}
                                            alt={`Project screenshot ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* RENDER THE VIEWER */}
            {isViewerOpen && (
                <ImageGalleryViewer
                    images={project.gallery}
                    currentIndex={currentImageIndex}
                    onClose={closeViewer}
                    onNavigate={handleNavigate}
                />
            )}
        </>
    );
};

export default ProjectModal;