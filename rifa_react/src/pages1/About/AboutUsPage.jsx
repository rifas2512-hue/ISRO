import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            About Us
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Welcome to MAY Designs, where creativity meets functionality. We are a
              team of passionate designers and architects dedicated to creating
              spaces that inspire and transform lives.
            </p>
            <p className="text-gray-600">
              With years of experience in the industry, we have developed a unique
              approach that combines innovative design solutions with practical
              functionality. Our projects range from residential to commercial,
              each one carefully crafted to meet our clients' needs and exceed
              their expectations.
            </p>
            <p className="text-gray-600">
              We believe that great design has the power to improve lives and
              create lasting impact. That's why we approach every project with
              passion, creativity, and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;