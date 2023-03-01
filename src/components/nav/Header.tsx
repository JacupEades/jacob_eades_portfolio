import { motion } from 'framer-motion';
import React, {useEffect} from 'react'
import StyleSwitch from '../switch/StyleSwitch';

type Props = {}

function Header({}: Props) {
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY
      // console.log(scrolled)
      let element: any = document.getElementById("header");
      if (scrolled >= 60) {
        element.classList.add("bg-neutralHeader");
      } else  {
        element.classList.remove("bg-neutralHeader");
      };
    })
  })

  return (
   <>
   {/* this div is for the header background later */}
   <div id='header' className='fixed z-50 w-screen top-0'>
    <header className='flex justify-between max-w-auto max-w-screen-xl top-0 py-4 mx-auto h-[5.5rem]'>
      {/* JE Logo */}
      <motion.div 
      initial={{ x: -200, opacity: 0, scale: 0.5}} 
      animate={{ x: 0, opacity: 1, scale: 1}}
      transition={{ duration: .75}}
      className='flex items-center px-8 font-pop h-14 w-14 font-bold text-4xl cursor-pointer bold'
      ><a href="#hero">JE</a>
      </motion.div>
      {/* Header Navigation */}
      <motion.div 
      initial={{ x: 200, opacity: 0, scale: 0.5}} 
      animate={{ x: 0, opacity: 1, scale: 1}}
      transition={{ duration: 1.25}}
      className='flex font-pop font-medium text-xl items-center px-8 space-x-12'>
         <a href='#about'>About</a>
         <a href='#major'>Major Projects</a>
         <a href='#'>Mini Projects</a>
         <a href='#'>Contact</a>
        <StyleSwitch />
      </motion.div>
    </header>
    </div>
    </>
  )
}

export default Header

function componentDidMount(window: Window & typeof globalThis) {
  throw new Error('Function not implemented.');
}
