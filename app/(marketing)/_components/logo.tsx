import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

const Logo = () => {
  return (
    <div className='hidden md:flex items-center min-w-max' >
      <Image 
        src="/logo-light.png"
        height="40"
        width="40"
        alt="logo"
        className='dark:hidden'
        />
        <Image 
        src="/logo-dark.png"
        height="40"
        width="40"
        alt="logo"
        className='hidden dark:block'
        />
        <p className={cn("font-semibold", font.className)} >
          Notion-A
        </p>
    </div>
  )
}

export default Logo;