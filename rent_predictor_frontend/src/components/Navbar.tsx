import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ThemeBtn'
import { Github } from 'lucide-react'

const Navbar = () => {
  return (
    <>
        <div className='font-bold text-xs md:text-lg'>💵 Rent Predictor</div>
        <div className='flex  gap-2'>
            <Button size={"sm"} className='md:hidden rounded-full' variant={"noShadow"} onClick={() => window.open('https://github.com/Rohitlodhii/rent-predictor-ml-nextjs', '_blank')}>
                <Github className='h-4 w-4' />
            </Button>
            <Button size={"sm"} className='hidden md:flex rounded-full' onClick={() => window.open('https://github.com/Rohitlodhii/rent-predictor-ml-nextjs', '_blank')}>
                <Github className='h-4 w-4' />
            </Button>
            <ModeToggle />
        </div>
        
        </>
  )
}

export default Navbar
