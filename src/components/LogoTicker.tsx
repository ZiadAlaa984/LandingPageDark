'use client'
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return <div className="bg-black text-white py-[72px] sm:py-24">
    <div className="container relative ">
      <h2 className="text-xl text-white/70 text-center  ">Trusted By The World  most innovation Teams </h2>
      <div className="overflow-hidden flex mt-9 before:content-[''] before:z-10 after:content-['']  after:right-0 before:left-0 before:top-0 after:top-0 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  relative  before:absolute before:h-full before:w-5  after:absolute after:h-full after:w-5   ">
        <motion.div
          transition={{
            duration: 10,
            ease: 'linear',
            repeat:Infinity,
          }}
          initial={{
        translateX:0
          }}
          animate={{
        translateX:'-50%'
          }}
          className="flex gap-16 flex-none pr-16 ">
        {images.map((imgSrc , index) =>   <Image key={index} className="flex-none" src={imgSrc.src} alt={imgSrc.alt}/>)}
        {images.map((imgSrc , index) =>   <Image key={index} className="flex-none" src={imgSrc.src} alt={imgSrc.alt}/>)}

      </motion.div>
      </div>
    </div>
  </div>
};
