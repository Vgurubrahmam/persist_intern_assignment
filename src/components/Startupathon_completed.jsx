import React from 'react'
import { useState } from 'react';

import { FaLinkedinIn } from "react-icons/fa6";

function Startupathon_completed() {
    let Startupathon_guide = [
        {
          logo_name: "Neighborgood",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673377d2636812ab650f04a9_65ca66431f754cba27bad9c4_NaighborGood(Logo)%20(1)-p-500.png",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdf32ed73b9d632859a762_purnedu-p-500.jpg",
          title: "Purnendu Thamb",
          stage: "Lead Developer, Neighborgood.",
          description: "NeighborGood aims to create the simplest platform for neighborhoods to connect, using an AI agent that acts as a social extrovert to find activities for people to enjoy together.",
          fund: "$61,500"
        },
        {
          logo_name: "Devisai",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67337868855fe0c9f7b045d4_669e94c2faad8d3cb3423756_logo-ChXaPMO6%20(1)%20(1).png",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb9ed3dd86dcb2c1763e_Naman%20Jain(Devis%20AI)-min-p-500.jpg",
          title: "Naman Jain",
          stage: "Leader, DevisAI.",
          description: "Generate up to 20 meme tokens daily. Users vote, and the top-voted coin gets featured on pump.fun with their website, Twitter, and Telegram channel",
          fund: "$10,500"
    
        },
        {
          logo_name: "Ovadrive",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6733779d03d7829a1662283e_ova%20drive.png",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67be0e24132d70b9cdf2b58c_1667138991083%20(2).jpg",
          title: "Yash Rastogi",
          stage: "Lead Developer, Ovadrive.",
          description: "Ovadrive is designed to turn your phone into an assistant following you everywhere, learning all about your life and helping to utilize that.",
          fund: " $61,500"
    
        }, {
          logo_name: "Tatbox",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67337d10dc66acd4e1b2861c_tatbox-logo-p-500.png",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb53b2fa46d7dc9b50b0_photo_2024-09-06_18-18-26-p-500.jpg",
          title: "Youssif Taha",
          stage: "Leader, Tatbox.",
          description: "at Box revolutionizes the tattoo industry, offering enthusiasts and artists a seamless, personalized experience with advanced AI and a vibrant marketplace for unique designs.",
          fund: "$61,500"
    
        }, {
          logo_name: "FaceSearchAI",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdfc988b2c2be172f014c5_FaceSeachLogo.svg",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb18c39d7dc97fd85562_1712099226969-p-500.jpg",
          title: "Adil Sameer",
          stage: "Leader, FaceSearchAI",
          description: "Find anyone online with face recognition search engine. Search for people by photo and verify you are talking to the person they claim to be.",
          fund: "$61,500"
    
        }, {
          logo_name: "AIBiden",
          logo: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/673386ff292b29985473f0f4_bidenAI.png",
          profile: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfad4f9c25356d5d2b58e_Rohan%20nimbalkar%20(AIBiden)-min-p-500.jpg",
          title: "Rohan Nimbalkar",
          stage: "Leader, AIBiden.",
          description: "AIBiden - An AI version of President Biden that answers questions previously asked to the real President, generating AI responses in video format using his voice.",
          fund: " $61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: " $61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }, {
          logo_name: "",
          logo: "",
          profile: "",
          title: "",
          stage: "",
          description: "",
          fund: "$61,500"
    
        }
      ]
      const itemsPerRow = 3
      const totalItems = Startupathon_guide.length
      const [visibleCount, setVisibleCount] = useState(itemsPerRow);
    
      const handleSeeMore = () => {
        setVisibleCount((prev) => Math.min(prev + itemsPerRow, totalItems));
      }

  return (
     <div className='flex flex-col items-center p-4 bg-black'>
            <h1 className='text-4xl font-bold max-sm:text-2xl px-10 text-center'>Completed Startupathon Challenges</h1>
            <p className='italic text-xl max-sm:text-md font-normal text-[#cccccceb] text-center px-4'>People like you have cracked Startupathon challenges and are now leading thriving startups.
            </p>
            <ul className="flex flex-wrap justify-center  items-center w-full mt-10 max-sm:px-0 gap-3 ">
              {Startupathon_guide.slice(0, visibleCount).map((each_data, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer  p-2 gap-1   flex flex-col border-1 border-[#8b62f3] justify-start items-start w-[400px] h-[400px] max-sm:h-auto max-sm:w-auto text-white rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-8xl hover:shadow-[0_3px_15px_2px_#3f2d6d]"
                >
                  <div className='flex justify-start items-start max-sm:justify-center max-sm:items-center max-sm:w-full gap-2'>
    
                    <h1 className='font-bold text-xl'>{each_data.logo_name}</h1>
                    <img src={each_data.logo} alt={each_data.logo_name} className='h-8' />
                  </div>
                  <div className='flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-start items-start gap-3 mt-4'>
                    <img src={each_data.profile} alt={each_data.title} className='h-55 max-sm:h-50 w-44 rounded-md' />
                    <div className='flex flex-col justify-center items-center'>
                      <h1 className='font-bold text-lg'>{each_data.title}</h1>
                      <p>{each_data.stage}</p>
                      <div className='bg-[#8b62f3] w-fit p-2 my-1 rounded-md'>
    
                        <FaLinkedinIn />
                      </div>
                      <p className='text-sm text-center'>{each_data.description}</p>
                    </div>
                  </div>
    
                  <div className='w-full  mt-auto flex flex-col max-sm:flex-col max-sm:justify-center max-sm:items-center'>
    
    
                    <p className='font-semibold text-lg mb-1'>Initial Funding Offered : <span className='text-[#8b62f3] italic font-bold'>{each_data.fund}</span></p>
    
                    <button className="shadow-[0_1px_5px_0_rgba(139,98,243,0.5)]  cursor-pointer border border-[#8b62f3] p-2 w-full px-5 text-center rounded-[9px] font-semibold text-md text-white bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] bg-[length:200%_100%] bg-[position:0%_50%] transition-[background-position] duration-700 ease-in-out hover:bg-[position:100%_50%]">
                      View Challenge Details
                    </button>
                  </div>
    
                </li>
              ))}
            </ul>
            {/* See More Button */}
            {visibleCount < totalItems && (
              <button
                onClick={handleSeeMore}
                className="text-[#8b62f3] font-bold  m-5 cursor-pointer"
              >
                See More
              </button>
            )}
          </div>
  )
}

export default Startupathon_completed