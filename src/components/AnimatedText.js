import React from 'react'
import { motion} from 'framer-motion';

const quote={
    initial:{
        opacity:1
    },
    animate:{
        opacity:1,
        transform:{
            delay:0.5,
            staggerChildren:0.08
        }
    }
}
const singleWord={
    initial:{
        opacity:0,
        y:8
    },
    animate:{
        opacity:1,
        y:0,
        transform:{
            duration:1
        }
    }
}
function AnimatedText({text, className=""}) {
  return (
    <div className='w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`${className} inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light`} variants={quote} initial="initial" animate="animate">
            {text.split(" ").map((word,index)=>(<motion.span key={word+"-"+index} className='inline-block'
            variants={singleWord}>
                {word}&nbsp;
            </motion.span>))}
        </motion.h1>
    </div>
  )
}

export default AnimatedText