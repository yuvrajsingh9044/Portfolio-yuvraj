import React from 'react'
import {motion} from 'framer-motion'
import { CC, HTML, JS, Java, Nextjs, Python, ReactIcon, TS, MDB, NodeIcon, ML } from './Icons'

const Skill = ({name, x, y, className=""}) => {
    return (
        <motion.div 
            className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dak xs:dark:text-light xs:font-bold ${className}`}
            whileHover={{scale:1.1}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}>
            {name}
        </motion.div>
    )
}

const PhoneSkill = ({name, progress, Icon}) => {
    return (
        <motion.div 
            className='flex w-full items-center justify-center rounded-2xl dark:bg-light bg-dark col-span-12 p-4 gap-1 hover:cursor-pointer'
            whileHover={{scale:1.05}} 
            transition={{duration:0.5}}>
            <div className='w-[4rem] bg-light dark:bg-dark'><Icon/></div>
            <div className='flex flex-col w-full items-center justify-center gap-y-1'>
                <h2 className='text-2xl font-bold text-primary dark:text-primaryDark self-center'>{name}</h2>
                <motion.div 
                    className={`px-2 h-[5px] bg-gradient-to-r from-purple-500 to-pink-500`}
                    initial={{width:"0%"}} 
                    whileInView={{width:`${progress}%`}} 
                    transition={{duration:1.2}} 
                    viewport={{once:true}}/>
            </div>
        </motion.div>
    )
}

function Skills() {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark sm:hidden'>
                <Skill name="Web" x="0" w="0"/>
                <Skill name="HTML" x="-15vw" y="2vw"/>
                <Skill name="React" x="-10vw" y="10vw"/>
                <Skill name="Python" x="17vw" y="-15vw"/>
                <Skill name="C/C++" x="15vw" y="-5vw"/>
                <Skill name="NextJS" x="-25vw" y="-5vw" className={"sm:hidden"}/>
                <Skill name="MySQL" x="8vw" y="-10vw"/>
                <Skill name="DSA" x="6vw" y="-22vw"/>
                <Skill name="JavaScript" x="-13vw" y="-5vw"/>
                <Skill name="Data Science" x="25vw" y="8vw" className={"sm:hidden"}/>
                <Skill name="Cyber Security" x="27vw" y="-1.5vw" className={"sm:hidden"}/>
            </div>
            <div className='w-full grid-cols-12 relative items-center justify-center hidden sm:grid gap-2 mt-2'>
                <PhoneSkill name="HTML/CSS" progress="100" Icon={HTML}/>
                <PhoneSkill name="JavaScript" progress="75" Icon={JS}/>
                <PhoneSkill name="Python" progress="100" Icon={Python}/>
                <PhoneSkill name="React/React-Native" progress="75" Icon={ReactIcon}/>
                <PhoneSkill name="TypeScript" progress="75" Icon={TS}/>
                <PhoneSkill name="MongoDB" progress="75" Icon={MDB}/>
                <PhoneSkill name="C/C++" progress="100" Icon={CC}/>
                <PhoneSkill name="NextJS" progress="75" Icon={Nextjs}/>
                <PhoneSkill name="NodeJS/Express.js" progress="75" Icon={NodeIcon}/>
                <PhoneSkill name="Java" progress="75" Icon={Java}/>
                <PhoneSkill name="Machine Learning" progress="75" Icon={ML}/>
            </div>
        </>
    )
}

export default Skills;