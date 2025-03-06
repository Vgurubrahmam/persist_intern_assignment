import React from 'react'
import { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { Tweet } from "react-tweet";

function Mentor_network() {
    const Startupathon_guide2 = [
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b40cb604eb57ebef2bf08_k6vSPQLVb8ywxrZDCfscGvegO8SfRmrJo7RrjE07VeQ.jpg",
          name: "Cillian Leonowicz",
          about: "Director in Technology Consulting & Blockchain Lead, EY",
          description: "Set up a Big 4's first global Blockchain Lab, managed some of the earliest PoC's in Europe and first production systems..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b305011bf5448aba1a554_i0E99uHOvMYhvfcVhcnBWFL4qo0Rjkt_fkoJRePG2n8-p-500.png",
          name: "Frank Wang",
          about: "Transformative Work Lead at Mask Network, Co-Founder at Meson Network, Mask",
          description: "Co-founded Meson Network, bootstrapped to reach 2/3 of Akaimai's bandwidth resources in 3 months..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b2fbd31a2fd6ff895d810_g_FNNydCWPBu6Ku_DZlVkEEP2mv2MWkM2_jHd9EnSQc-p-500.png",
          name: "Eric Hendrickus",
          about: "Investments, Central Capital Ventura",
          description: "Mentor in SYNRGY, a fintech focused accelerator, Mentor in 1000 Startup Digital, an accelerator..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b2f53e6116045f058a72e_NnEXYQw5fo3Zrsd4GlYxBPyPqrBmfy-_ErZIJRgfSe4-p-500.png",
          name: "Stefon Crawford",
          about: "VC Analyst, General Motors Ventures",
          description: "Experienced Investor responsible for identifying innovation within the private market for General Motors..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b2e50dd188bc88714effa_BjFji6tGbD6u-xpxuc530Vo6GBJfl66JLwt-_0jowzw-p-500.png",
          name: "Adam Wong",
          about: "Accelerator Principal, Starburst Aerospace",
          description: "Pitched as a finalist at AFWERX pitch day, chosen as a USA delegate to the International Telecommunication..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b2dd479c3e5a482c10b6a_A_CSzDWrbuq0tyGdMrjJMSWtIFW2oslD85JC1pSrwcQ.png",
          name: "Stephen Grinalds",
          about: "CTO, Chisos Capital",
          description: "3x DLT Industry Founder United Nations Working Group"
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672d0f66d4901f2c3abb87b5_XH7uul9HcAH8L9B_TMI_QJe8XIfNOt2jmUsKFkL-FNA-p-500.jpg",
          name: "Jorge Carrasco",
          about: "Director of Emerging Technologies, Etisalat",
          description: "Launched B2B digital solutions across EMEA, including mobile apps, wifi access, omnichannel digital..."
        },
        {
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672d0eeac7322686e7befdc0_EA4B9kkeNNmLTPCpOsmGhyj91BJBOPVhXBEMdokee3Q-p-500.jpg",
          name: "Anuraag Sunder",
          about: "Managing Director, J Syzygia Consultants",
          description: "Awarded prestigious Chevening Fellowship by Her Majesty's Govt. Member- Chatham House..."
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
        {
          profile: "",
          name: "",
          about: "",
          description: ""
        },
      ]
      const itemsPerRow2 = 4
      const totalItems2 = Startupathon_guide2.length
      const [visibleCount2, setVisibleCount2] = useState(itemsPerRow2);
    
      const handleSeeMore2 = () => {
        setVisibleCount2((prev) => Math.min(prev + itemsPerRow2, totalItems2));
      }
  return (
    <div className='bg-black text-white'>
    <div className='flex flex-col items-center bg-black'>
    <h1 className='text-4xl font-bold max-sm:text-2xl px-10 text-center'>By getting accepted you unlock access to our elite founder network.</h1>
    <p className='italic text-xl max-sm:text-md font-normal text-[#cccccceb] text-center px-4'>Join Persist and gain access to our 400+ millionaire and billionaire startup network.
    </p>
    <ul className="flex flex-wrap justify-center  items-center w-full mt-10 max-sm:mt-3 max-sm:px-0 gap-1  max-sm:gap-2">
      {Startupathon_guide2.slice(0,visibleCount2).map((each_data, index) => (
        <li
          key={index}
          className="relative cursor-pointer m-4  p-2 gap-1 flex flex-col border-1 border-[#8b62f3] justify-start items-start w-[280px] h-[400px] max-sm:h-auto max-sm:w-auto text-white rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-8xl hover:shadow-[0_3px_15px_2px_#3f2d6d]"
        >
          <div className='flex flex-col justify-start items-start gap-2 w-full h-full'>

            <img src={each_data.profile} alt={each_data.name} className='w-full h-40 rounded-lg px-1 object-cover' />
            <h1 className='font-semibold text-xl'>{each_data.name}</h1>
            <p>{each_data.about}</p>
            <p className='text-sm mt-auto'>{each_data.description}</p>
            <div className='bg-[#8b62f3] w-fit p-2  rounded-md'>

              <FaLinkedinIn />
            </div>
          </div>


        </li>
      ))}
    </ul>
    {/* See More Button */}
    {visibleCount2 < totalItems2 && (
      <button
        onClick={handleSeeMore2}
        className="text-[#8b62f3] font-bold  m-5 cursor-pointer"
      >
        See More
      </button>
    )}
  </div>
  {/* Startupathon challenge */}
  <div  className='m-0'>
    <p className='text-3xl text-center font-medium px-3'>You are just one <span className='text-[#8b62f3] font-semibold'>Startupathon Challenge</span> away from an exciting career as the <span className='text-[#8b62f3]'>founder of a company</span>, with a <span className='text-[#8b62f3]'>full salary</span> and <span className='text-[#8b62f3]'>ownership</span> in what you build.</p>
    <div className="flex justify-center items-center    p-4 rounded-lg shadow-md">

<Tweet id="1814625998136029202" />

</div>

  </div>
  <div className="relative w-fit  max-sm:w-[90%] mx-auto">
{/* Background Image */}
<img 
src="https://i.ibb.co/wNGbP8Xh/Screenshot-2025-03-06-173337-1.png" 
alt="" 
className="h-50  max-sm:h-60 max-sm:w-90 object-cover border-2 border-[#8b62f3] rounded-xl"
/>

{/* Overlay Content */}
<div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50 p-4">
<h1 className="text-lg font-medium mb-4">
  Sign up to get notified first about new Startupathon projects and receive updates through our newsletter.
</h1>

<div className="flex max-sm:flex-col items-center gap-2 max-sm:w-full">
  <input 
    type="email" 
    placeholder="Enter your email ID" 
    className="border max-sm:w-full border-[#8b62f3] bg-transparent text-white p-2 rounded-md outline-none placeholder-gray-300"
  />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8b62f3]/20 to-[#8b62f3]/20 opacity-50 transition-opacity duration-300 group-hover:opacity-0 max-sm:hidden"></div>

  <button className="bg-[#8b62f3] max-sm:w-full p-2 font-semibold rounded-md cursor-pointer">
    Subscribe
  </button>
</div>
</div>
</div>
</div>
  )
}

export default Mentor_network