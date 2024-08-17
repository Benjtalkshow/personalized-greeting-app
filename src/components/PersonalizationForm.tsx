import React from 'react';
import { motion } from 'framer-motion';
import { InputFormProps } from '../lib/@types';



const InputForm: React.FC<InputFormProps> = ({ userName, setUserName, onNext }) => {
  return (
    <div className="flex flex-col items-center mt-8 px-2">
      <motion.input
        type="text"
        placeholder="Enter your name"
        className="text-2xl  outline-none border-purple-500 p-2 rounded-md shadow-md border-2 mb-4"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.button
        onClick={onNext}
        className="bg-purple-500 text-white px-10 py-2 rounded-md text-2xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </div>
  );
};

export default InputForm;
