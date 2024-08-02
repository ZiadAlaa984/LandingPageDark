'use client'
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  // Create a ref for the container of the image
  const appImageContainerRef = useRef<HTMLDivElement>(null);
  // Set up scroll animation for the container
  const { scrollYProgress } = useScroll({
    target: appImageContainerRef,
    offset: ['start end', 'end start']
  });

  // Transform scroll progress into rotateX value
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [.05, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] ">
      <div className="container relative w-[90%]">
        <h2 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold">
          Intuitive Interface
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-xl text-center text-white/70 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dicta unde aut non debitis ipsa nihil amet hic maxime consequatur!
          </p>
        </div>
        <motion.div
          ref={appImageContainerRef}
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px'
          }}
          className=" mx-auto"
        >
          <Image 
            src={appScreen} 
            alt="The Product Screenshot" 
            className="mt-14"
            layout="responsive" // Adjust layout as needed
          />
        </motion.div>
      </div>
    </div>
  );
};
