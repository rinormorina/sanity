import React from "react";
import { motion } from "framer-motion";

const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        borderRadius: ["25%", "25%", "55%", "80%", "25%"],
        opacity: [0.1, 0.2, 0.3, 0.7, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
      }}
      transition={{ duration: 2.5 }}
      id="background-circle"
      className="relative flex justify-center items-center mb-20 -z-10"
    >
      <div className="absolute border border-slate-700 rounded-full h-[200px] w-[200px] mt-52" />
      <div className="absolute border border-slate-700 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-slate-700 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-purple-700 rounded-full h-[500px] w-[500px] animate-pin mt-52" />
      <div className="opacity-20 absolute border border-slate-700 rounded-full h-[500px] w-[500px] animate-pulse mt-52" />
      <div className="absolute border border-purple-900 animate-pulse  rounded-full h-[700px] w-[700px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircle;
