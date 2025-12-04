import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const ImageGalleryViewer = ({ images, currentIndex, onClose, onNavigate }) => {
    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];
    const totalImages = images.length;

    const handleNext = () => {
        onNavigate(1); 
    };

    const handlePrev = () => {
        onNavigate(-1);
    };
    
    // Add keyboard controls for navigation and closing
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, onNavigate]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity">
            {/* Close Button */}
            <button 
                className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full bg-gray-800 hover:bg-yellow-500 transition-colors"
                onClick={onClose}
                aria-label="Close image viewer"
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Previous Button */}
            <button
                className={`absolute left-4 z-50 text-white text-3xl p-4 rounded-full bg-gray-800 hover:bg-yellow-500 transition-colors ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous image"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute right-4 z-50 text-white text-3xl p-4 rounded-full bg-gray-800 hover:bg-yellow-500 transition-colors ${currentIndex === totalImages - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
                onClick={handleNext}
                disabled={currentIndex === totalImages - 1}
                aria-label="Next image"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            {/* Image Display */}
            <div className="relative max-w-[90vw] max-h-[90vh]">
                <Image
                    src={currentImage}
                    alt={`Gallery Image ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[90vh] rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-gray-800 bg-opacity-70 px-4 py-1 rounded-full">
                    {currentIndex + 1} / {totalImages}
                </div>
            </div>
        </div>
    );
};

export default ImageGalleryViewer;