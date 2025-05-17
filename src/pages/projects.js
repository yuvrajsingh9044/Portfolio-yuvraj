import Head from 'next/head'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'
import TransitionEffect from '../components/TransitionEffect'

const Project = ({ title, description, img, link }) => {
  return (
    <div className='col-span-6 sm:col-span-12'>
      <div className='w-full relative rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
        <Link href={link} target='_blank' className='w-full inline-block'>
          <Image src={img} alt={title} className='w-full h-auto rounded-2xl' width={600} height={400} />
        </Link>
        <div className='mt-4'>
          <h2 className='text-2xl font-bold text-dark dark:text-light mb-2'>{title}</h2>
          <p className='text-[1.05rem] text-dark dark:text-light'>{description}</p>
          <Link href={link} target='_blank' className='flex items-center mt-4 text-primary dark:text-primaryDark'>
            View Project <LinkArrow className='w-6 ml-2' />
          </Link>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <>
      <Head>
        <title>Yuvraj | Projects Page</title>
        <meta name='description' content='Yuvraj Singh Projects Page' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-10'>
          <AnimatedText text='Innovation in Action!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-12 gap-16 sm:gap-8'>
            <Project
              title='E-commerce Web'
              description='A fully functional e-commerce platform built with modern web technologies, featuring product listings, a shopping cart, secure payment integration, and a user-friendly interface.'
              img='/ecom.jpg'
              link='https://github.com/yuvrajsingh9044/kollegeapply' // Update with actual link
            />
            <Project
              title='Kollege Apply Portal'
              description='A web application designed to streamline college applications, allowing students to submit applications, track progress, and manage documents securely.'
              img='/kollege-project.jpg'
              link='https://github.com/yuvrajsingh9044/kollegeapply' // Update with actual link
            />
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects