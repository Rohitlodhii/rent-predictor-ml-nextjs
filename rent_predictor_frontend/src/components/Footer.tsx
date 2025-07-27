import React from 'react'
import NavContainer from './hero/nav-container'
import { Button } from './ui/button'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
  
          <div
      className="
        relative  md:h-14  p-8 mb-4
        flex flex-col md:flex-row gap-4 items-center justify-between
        bg-white dark:bg-[#262626]
        border-2 border-black
        rounded-md overflow-hidden
        shadow-[4px_4px_0_0_black]
      "
    >
        <div className='font-bold text-sm md:text-base'>
            @rohitlodhii 
        </div>
        <div className='flex gap-2'>
            <Button size={"sm"} variant={"noShadow"} className='flex rounded-full px-3 items-center justify-center h-10 '>
                <Linkedin className='w-4 h-4 '/> 
            </Button>
            <Button size={"sm"} variant={"noShadow"} className='flex rounded-full px-3 items-center justify-center h-10 '>
                <Instagram className='w-4 h-4 '/> 
            </Button>
            <Button size={"sm"} variant={"noShadow"} className='flex rounded-full px-3 items-center justify-center h-10 '>
                <Twitter className='w-4 h-4 '/> 
            </Button>
            
           
        </div>
        </div>
    
  )
}

export default Footer
