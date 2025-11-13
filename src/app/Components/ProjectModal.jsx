import React from 'react';
import { XMarkIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        //Modal Background
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 sm:p-8 overflow-y-auto">
            {/*Close Button*/}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-yellow-500 z-50 p-2 bg-gray-800 rounded-full"
            >
                <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="w-full max-w-6xl bg-[#181818] rounded-xl shadow-2xl p-4 sm:p-8 my-auto">
                {/* Header and Main Links */}
                <div className="flex justify-between items-start mb-6 border-b border-gray-700 pb-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h2>
                    <div className="flex space-x-4 mt-1">
                        {project.github && (
                            <Link href={project.gitURL} target="_blank" className="text-yellow-500 hover:text-white transition-colors flex items-center">
                                <CodeBracketIcon className="h-6 w-6 mr-1" />
                                Code
                            </Link>
                        )}
                        {project.previewURL && (
                            <Link href={project.previewURL} target="_blank" className="text-yellow-500 hover:text-white transition-colors flex items-center">
                                <EyeIcon className="h-6 w-6 mr-1" />
                                Preview
                            </Link>
                        )}
                    </div>
                </div>

                {/* Subtags/Skills Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">Key Skills Used:</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.subtags.map((subtag, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-full text-sm font-medium"
                            >
                                {subtag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Main Description */}
                <p className="text-gray-300 text-base mb-6">{project.fullDescription || project.description}</p>
                
                {/* Image Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-300 mb-4 mt-6">Gallery:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.gallery.map((imgSrc, index) => (
                                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={imgSrc}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;