import { motion } from 'framer-motion';
import Eco from '../assets/icons/ecosystem.svg';
import Feature from './Feature';


const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return <div className="bg-black text-white py-[72px]">
    <div className="container relative">
      <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Every You Need </h2>
      <div className='max-w-xl mx-auto'>
              <p className='text-center mt-5  text-xl  text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Et, repudiandae enim? Cum fuga tempore exercitationem!</p>
</div>
        <div className='mt-16 flex flex-col gap-4 sm:flex-row  '>
            {features.map(({ title, description }, index) => (
              <Feature title={title} description={description} key={index} />
        ))}
        </div>

    </div>
  </div>;
};
