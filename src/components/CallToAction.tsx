import Image from "next/image";
import helix2 from "../assets/images/helix2.png";
import emojistar from "../assets/images/emojistar.png";
export const CallToAction = () => {

  return    <div className="text-white overflow-hidden bg-black  py-[72px] sm:py-24">
    <div className="container   max-w-xl relative ">
      <Image  className='absolute  -top-[100px] right-[calc(100%+24px)] hidden sm:inline' alt="helix2" src={helix2} />
      <Image  className='absolute  -top-[10px] left-[calc(100%+24px)] hidden sm:inline' alt="emojistar" src={emojistar} />

        <h2 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold">
         Get Instant Access
      </h2>
      <div className='max-w-xl mx-auto'>
              <p className='text-center mt-5  text-xl  text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Et, repudiandae enim? Cum fuga tempore exercitationem!</p>
      </div>
      <form className="flex mt-12 flex-col max-w-sm mx-auto sm:flex-row gap-2.5">
        <input type="email" placeholder="ziadalaa984@gmail.com" className="h-12 sm:flex-1 bg-white/20 rounded-lg px-5 font-medium" />
        <button className="bg-white h-12 font-medium rounded-lg px-5 text-black">Get Access</button>
      </form>
      </div>
    </div>
};