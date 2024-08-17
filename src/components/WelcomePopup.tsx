import React from 'react';
import { WelcomePopupProps } from '../lib/@types';



const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 px-2 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform!</h2>
        <p className="mb-6">This platform allows you to create personalized thank you cards using images from Unsplash. Select an image, personalize it with your name, and download your custom card!</p>
        <button
          onClick={onClose}
          className="bg-purple-500 text-white px-6 py-2 rounded-md text-lg shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
