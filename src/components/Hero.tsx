'use client'
import Image from "next/image";
import ArrowIcons from "../assets/icons/arrow-w.svg";
import Cursor from "../assets/images/cursor.png";
import Message from "../assets/images/message.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black overflow-hidden relative text-white py-[72px] bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="container relative z-10">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="border flex gap-3 py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#F893D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text ">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1 ">
              <span> Read More </span>
              <ArrowIcons />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative ">
            <motion.div
              drag
              dragSnapToOrigin
              className="cursor-grab absolute h-[200px] z-[100] w-[200px] right-[476px] top-[108px] hidden sm:inline">
                          <Image src={Cursor} draggable='false' alt="curser" className="max-w-none" />
            </motion.div>
            <motion.div
                          drag
              dragSnapToOrigin
              className="cursor-grab absolute  h-[200px] z-[100] w-[200px] top-[56px] left-[498px] hidden sm:inline" >
                          <Image src={Message} draggable='false' alt="Message" className="max-w-none" />
            </motion.div>

          <h1 className="text-7xl mt-9 sm:text-9xl  tracking-tighter text-center  font-bold inline-flex">
            One Task <br /> at a Time
            </h1>

                      </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            aliquid. Debitis dolorem ad in vel animi placeat, sequi eos. Ipsum
            molestiae voluptatibus officia illum vitae recusandae rerum!
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="bg-white py-3 px-5 font-medium rounded-lg text-black">
            Get For Free
          </button>
        </div>
      </div>
      <div className="absolute sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] h-[375px] w-[750px] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] rounded-[100%]  bg-black"></div>
    </div>
  );
};
