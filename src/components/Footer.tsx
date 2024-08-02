import InstaIcon from '../assets/icons/insta.svg'
import Tiktok from '../assets/icons/tiktok.svg'
import Youtube from '../assets/icons/youtube.svg'
import Xsocial from '../assets/icons/x-social.svg'
export const Footer = () => {
  return <footer className='py-4 bg-black text-white/60 border-t border-white/20'>
    <div className="container relative">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center">
          @ 2024 Your ziad All rights reserved
        </div>
        <ul className="flex items-center justify-center gap-4  mt-4">
          <li className='cursor-pointer'><Xsocial/></li>
          <li className='cursor-pointer'><Tiktok/></li>
          <li className='cursor-pointer'><Youtube/></li>
          <li className='cursor-pointer'><InstaIcon/></li>
        </ul>
      </div>
    </div>
  
  </footer>;
};
