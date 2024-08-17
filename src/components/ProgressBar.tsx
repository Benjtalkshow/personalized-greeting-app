import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  return (
    <motion.div
      className="progress-bar bg-gray-200 rounded-full h-2 mb-4"
      initial={{ width: 0 }}
      animate={{ width: `${(step / 3) * 100}%` }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-purple-500 h-full rounded-none"></div>
    </motion.div>
  );
};

export default ProgressBar;
