import React from 'react';
import { motion } from 'framer-motion';
import favIcon from '../images/logo-black.gif';
const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        <img src={favIcon} alt="loader" />
      </motion.div>
    </div>
  );
};

export default Preloader;
