import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Head from 'next/head'
import {motion} from "framer-motion"
import Image from "next/image"
import contactimg from "../../public/contact.jpeg"
import TransitionEffect from '../components/TransitionEffect'
const FormComp=({name, place, prompt})=>{
    if(name==="email"){
        return(
            <div className='ml-5 flex w-full items-center '>
            <label for={name} className='text-2xl relative'>{prompt}
            <input type="text" autoFocus name={name} id={name} placeholder={place} className='w-full p-2 border-2 border-solid border-dark/50'/></label>
            </div>
        )    
    }
    return(
        <div className='ml-5 flex w-full items-center '>
        <label for={name} className='text-2xl relative'>{prompt}
        <input type="text" name={name} id={name} placeholder={place} className='w-full p-2 border-2 border-solid border-dark/50'/></label>
        </div>
    )
}

function contact() {
  return (
    <>
        <Head>
            <title>Yuvraj | Contact Page</title>
            <meta name ="description" content="About page"/>
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-start dark:bg-dark dark:text-light'>
            <Layout className='pt-10'>
                <AnimatedText text={"Contact Me!"}  className={"md:!text-7xl"}/>
                <div className='m-20'>
                <form name="contact" method="post" action="/" netlify>
                <div className='flex flex-col gap-4 items-center'>
                
                <FormComp name={"name"} place={"Enter your full name"} prompt={"Full Name: "}/>
                <FormComp name={"email"} place={"Email ID"} prompt={"Email Address: "}/>
                <FormComp name={"email"} place={"Enter your message Here"} prompt={"Message: "}/>
                </div>
                <motion.div className='flex mt-2 ml-2 w-auto items-center'
                whileHover={{scale:1.1}}>
                    <button type="submit" className='p-3 rounded-lg  text-light bg-dark text-xl font-bold dark:bg-light dark:text-dark'>Submit</button></motion.div>
                
                
                </form>
                </div>
                <div className='fixed top-[40%] right-5 xl:hidden'>
                    <Image src={contactimg} alt={"Yuvraj"}/>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default contact