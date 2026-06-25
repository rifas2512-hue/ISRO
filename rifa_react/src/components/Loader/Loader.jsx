import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ isLoading, onLoadingComplete, text, useVideo = false, children }) => {
  useEffect(() => {
    if (!isLoading && onLoadingComplete) {
      onLoadingComplete();
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          >
            {useVideo ? (
              <div className="w-64 h-64 relative">
                {/* Video or animated logo placeholder */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MAY</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-800">{text || "Loading..."}</h2>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;