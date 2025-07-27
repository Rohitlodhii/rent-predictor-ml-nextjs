import React from 'react'
import GridBackground from './hero/gridBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'


const AccourdingCard = () => {
  return (
    <div
    className="
      relative md:p-8 px-1 py-8
      bg-white dark:bg-[#262626]
      border-2 dark:border-4 border-black
      rounded-md overflow-hidden
      shadow-[4px_4px_0_0_black]
      flex items-center justify-center
    "
  >
    {/* Grid lines using CSS gradients */}
    <div
      className="
        absolute inset-0 
        bg-[length:40px_40px] 
        bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
      "
      aria-hidden="true"
    />
    <div className="relative z-10 flex items-center justify-center gap-4 flex-col">

  
      

<Accordion type="single" collapsible className="w-full md:min-w-xl ">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-sm md:text-base'>⚙️ How this works internally ? </AccordionTrigger>
        <AccordionContent>
          All the internal working  is explained <a href="https://howthatworks.vercel.app/jW3jWx8K0VPYd8JqsPxm" className='text-blue-400 cursor-pointer underline'>here ⛓️‍💥</a>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
<Accordion type="single" collapsible className="w-full md:min-w-xl ">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-sm md:text-base'>📊 Are these predictions correct?</AccordionTrigger>
        <AccordionContent className='w-full   text-wrap'>
          Its 82% accurate accourding to scraped data
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>
    </div>
  )
}

export default AccourdingCard
