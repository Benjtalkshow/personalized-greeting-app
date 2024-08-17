import React from 'react';
import { motion } from 'framer-motion';
import { ImageSelectorProps } from '../lib/@types';



const ImageSelector: React.FC<ImageSelectorProps> = ({ images, onSelectImage }) => {
  return (
    <div className="flex justify-center items-center my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer w-full sm:w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] overflow-hidden rounded-lg shadow-lg mx-auto"
            onClick={() => onSelectImage(image)}
          >
            <motion.img
              src={image}
              alt={`Random ${index}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.2 }}  
              whileTap={{ scale: 1.1 }}    
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;
