'use client';
import { useEffect, useRef } from 'react';
import Eco from '../assets/icons/ecosystem.svg';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Feature({ index, title, description }: {
  index: string;
  title: string;
  description: string;
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);  
  const MaskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function updatePosition(e: MouseEvent) {
      if (!border.current) return;
      const rect = border.current.getBoundingClientRect();
      const offestX = e.clientX - rect.left;
      const offestY = e.clientY - rect.top;
      offsetX.set(offestX);
      offsetY.set(offestY);
    }

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div key={index} className='border border-white/30 relative px-5 py-10 text-center rounded-xl sm:flex-1'>
      <motion.div
        className='absolute inset-0 border-2 border-purple-400 rounded-xl'
        style={{ maskImage: MaskImage }}
        ref={border}
      />
      <div className='inline-flex h-14 w-14 text-black bg-white justify-center items-center rounded-lg'>
        <Eco />
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
}
