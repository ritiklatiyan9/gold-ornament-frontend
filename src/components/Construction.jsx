// UnderConstruction.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Construction, AlertCircle } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Construction className="w-16 h-16 mx-auto text-yellow-500" />
          <h1 className="mt-4 text-2xl font-bold">Page Under Construction</h1>
          <p className="mt-2 text-gray-600">
            We're working hard to bring you this page. Please check back later!
          </p>
          <div className="mt-6">
            <AlertCircle className="w-8 h-8 mx-auto text-red-500" />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default UnderConstruction;
