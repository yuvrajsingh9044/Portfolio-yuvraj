import React from 'react'

function Layout({children, className=""}) {
  return (
    <div className={`w-full h-full inline-block z-0 dark:bg-dark bg-light xl:p-24 lg:p-16 md:p-12 sm:p-8 p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout