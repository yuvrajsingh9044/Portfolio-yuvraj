import Link from 'next/link';
import React, { useState } from 'react'
import Logo from './Logo';
import {useRouter} from 'next/router';
import {LinkedIn, Github, Instagram, SunIcon, MoonIcon} from './Icons';
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import insta from "../../public/insta.jpeg"
import Image from 'next/image';

const CustomLink=({href, title, className=""})=>{
  const router =useRouter();
  
  return(
    <Link href={href} className={`${className} relative group text-2xl`}>
      {title}
      <span className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath==href?'w-full':'w-0'}`}>&nbsp;</span>
    </Link>
  )
}
const CustomMobileLink=({href, title, className="", toggle})=>{
  const router =useRouter();

  const handle=()=>{
    toggle();
    router.push(href)
  }
  
  return(
    <button href={href} className={`${className} relative group text-3xl text-light dark:text-dark my-2`} onClick={handle}>
      {title}
      <span className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath==href?'w-full':'w-0'}`}>&nbsp;</span>
    </button>
  )
}

function Navbar() {
  const [mode,setMode]=useThemeSwitcher(); 
  const [isOpen, setIsOpen] = useState(false)
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen?'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen==true?'opacity-0':'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav >
            <CustomLink href="/" title="Home" className="mr-4"/>
            <CustomLink href="/about" title="About" className="mx-4"/>
            <CustomLink href="/projects" title="Projects" className="mx-4"/>
            <CustomLink href="/contact" title="Contact me" className="ml-4"/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://www.linkedin.com/in/yuvrajsingh001/" 
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-11 mx-3'
            target={"_blank"}><LinkedIn/></motion.a>
            <motion.a href="https://github.com/yuvrajsingh9044" target={"_blank"} 
            className='w-11 mx-3'
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}><Github/></motion.a>
            <motion.a href="https://www.instagram.com/yuvra_jsingh_/" target={"_blank"}
            className='w-11 ml-3'
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}><Instagram/></motion.a>
            <button className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode==="light"?"bg-dark text-light":"bg-light text-dark"}`} onClick={()=>{
              setMode(mode==="light"?"dark":"light")
            }}>
            {mode==="dark"?
            <SunIcon className={"fill-dark"}/>
            :<MoonIcon className={"fill-dark"}/>}
            </button>
        </nav>
        </div>
        {/* Mobile Navigation */}
        {isOpen?<motion.div
        initial={{scale:0,opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:100}}
        transition={{duration:0.75}}
        className='min-w-[70vw] z-30 flex-col fixed flex justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 gap-2'>
        <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
            <CustomMobileLink href="/contact" title="Contact me" className="" toggle={handleClick} />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a href="https://www.linkedin.com/in/yuvrajsingh001/" 
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className='w-11 mx-3'
            target={"_blank"}><LinkedIn/></motion.a>
            <motion.a href="https://github.com/yuvrajsingh9044" target={"_blank"} 
            className='w-11 mx-3'
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}><Github className={`bg-light dark:bg-dark rounded-full`}/></motion.a>
            <motion.a href="https://www.instagram.com/yuvra_jsingh_/" target={"_blank"}
            className='w-11 ml-3'
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}><Image src={insta} alt="Insta" className='rounded-xl'/></motion.a>
            <button className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode==="light"?"bg-dark text-light":"bg-light text-dark"}`} onClick={()=>{
              setMode(mode==="light"?"dark":"light")
            }}>
            {mode==="dark"?
            <SunIcon className={"fill-dark"}/>
            :<MoonIcon className={"fill-dark"}/>}
            </button>
        </nav>
        </motion.div>:null}

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default Navbar;