import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className={'py-8 flex items-center justify-between lg:flex-col lg:py-6'}>
            <span>{new Date().getFullYear()}&copy;</span>
            <div className='flex items-center'>Made with <span className='text-primary dark:text-primaryDark text-2xl px-1 lg:py-2'> ❤ </span>by&nbsp;
            <Link href="https://www.instagram.com/yuvra_jsingh/" target={"_blank"} className='underline underline-offset-2'>Yuvraj</Link></div>
            <Link href="/contact" className='underline underline-offset-2'>Say Hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer