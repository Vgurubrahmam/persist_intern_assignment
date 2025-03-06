import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { LiaYoutubeSquare } from "react-icons/lia";
import { Instagram } from 'lucide-react';
function footer() {
  return (
    <div className='flex flex-col pt-20 pb-30 gap-20 bg-black text-white'>
    <div className='flex  justify-between items-start max-sm:flex-col max-sm:justify-center max-sm:items-center px-10 w-full '>
    <div  className='flex flex-col justify-start items-start w-[40%] max-sm:w-[100%] max-sm:justify-center max-sm:items-center gap-10 max-sm:gap-5'>
      <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png" alt="" />
      <p className='font-light text-lg text-center'>We partner with entrepreneurs and businesses to help scale and grow their ideas. With a diverse team skilled in every sector there is no business we can not help get a leg up.</p>
      <div className='flex justify-start items-center gap-10'>
  
      <Instagram size={35}/>
      <GrLinkedin size={33} />
      <LiaYoutubeSquare size={50} />
      </div>
    </div>
    <div className='flex justify-around items-start w-[50%] max-sm:w-full max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center max-sm:gap-10 mt-5'>
      <div className='flex flex-col gap-3 text-gray-400'>
  
      <h1 className=' font-bold text-2xl text-white'>Quick links</h1>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Home</p>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Investor Application
      </p>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Job Application</p>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Apply To Startup Accelerator</p>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Career Accelerator Program</p>
      <p className='hover:text-[#3f2d6d] cursor-pointer'>Our team</p>
      </div>
  <div className='flex flex-col gap-3 text-gray-400'>
    <h1 className='hover:text-[#3f2d6d] cursor-pointer font-bold text-2xl text-white'>Legel</h1>
    <p className='hover:text-[#3f2d6d] cursor-pointer'>Terms of  service</p>
    <p className='hover:text-[#3f2d6d] cursor-pointer'>Privacy policy</p>
    <p className='hover:text-[#3f2d6d] cursor-pointer'>Decentralized Intelligence Agency</p>
  </div>
    </div>
  
    </div>
    <p className='font-light text-gray-300 px-5'>All rights reserved © 2025 persistventures.com</p>
  
    </div>
  )
}

export default footer