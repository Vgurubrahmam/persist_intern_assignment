import React from 'react'
import { motion } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Instagram } from 'lucide-react';
function Ongoing() {
    let startupation_challenges = [
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c392403527acaf03a1fe_Untitled_design__97_-removebg-preview%20(1).png",
          title: "VibeCoder",
          offer: "Initial Funding Offered :$10,500",
          discription: "An innovative Vibe coding tool with features like drawing tools, Spotify integration, UI component library, smart code explanations, and built-in design assets.",
          deadline: "Deadline approaching! Apply by March 14, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bb5db36ed0be37fca5e661_Untitled_design__99_-removebg-preview%20(1).png",
          title: "BiasBuster",
          offer: "Initial Funding Offered :$13,000",
          discription: "A  Chrome extension and web platform to detect and remove bias from news articles, ensuring objective and balanced content.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c9b32006000c9ae96781_Untitled_design__98_-removebg-preview%20(1).png",
          title: "CPATech",
          offer: "Initial Funding Offered :$10,500",
          discription: "Build a secure financial management dashboard with APIs and AI insights to showcase your full-stack skills and land a job.",
          deadline: "Deadline approaching! Apply by March 14, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b4a01e55d408ac25a8027e_67360c9f15ea2678f5d3009a_AI%20gym%20(1).png",
          title: "GymAI",
          offer: "Initial Funding Offered :$10,500",
          discription: "Develop an AI-powered fitness tracking MVP that accurately detects user movements, counts reps and sets, and provides real-time feedback using a front-end interface and a back-end for motion analysis.",
          deadline: "Deadline approaching! Apply by March 14, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b49f4c9301912449c875ef_Untitled_design__95_-removebg-preview%20(1).png",
          title: "ElevateMind",
          offer: "Initial Funding Offered :$10,500",
          discription: "Develop an iOS app that integrates with Apple Watch to provide health insights, burnout detection, and AI-driven goal tracking, offering high achievers personalized milestones and progress prompts.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67ae3102c8b2598c29271e20_Untitled_design__88_-removebg-preview%20(1).png",
          title: "VibeCoder",
          offer: "Initial Funding Offered :$10,500",
          discription: "An innovative Vibe coding tool with features like drawing tools, Spotify integration, UI component library, smart code explanations, and built-in design assets.",
          deadline: "Deadline approaching! Apply by March 14, 2025!"
    
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67a43d2e9a689859246d30bc_InstaCreatorBot.png",
          title: "InstaCreatorBot",
          offer: "nitial Funding Offered :$13,000",
          discription: "Content Format Strategist & Recruiter: Identifies and recruits content creators who have demonstrated viral success with specific content formats.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/678f85ca8a461c052072aada_file%20(4)%20(2).png",
          title: "VeneersAI",
          offer: "Initial Funding Offered : $13,000",
          discription: "Build a SaaS AI tool for veneers visualization, earn equity, salary, and launch your entrepreneurial journey with world-class support.",
          deadline: "Deadline approaching! Apply by March 12, 2025!"
        }, {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67753b29ebf0ae769c34c810_co-ordinate__6_-removebg-preview%20(1).png",
          title: "VideoVerse",
          offer: "Initial Funding Offered :$13,000",
          discription: "Seeking a Creative AI Developer to build innovative video and music generation tools using APIs for an exciting project at Startupathon.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        }, {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/676b02b16db7e993e9c05db3_co-ordinate__2_-removebg-preview%20(1).png",
          title: "AscensionStudio",
          offer: "Initial Funding Offered :$27,500",
          discription: "Become the CEO of Ascension Studio, leading the creation of AI-driven films and stories. No formal qualifications needed, just passion and vision.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        }, {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674090c479beddc1a9373325_market%20logo%20(1)%20(1).png",
          title: "MarketBuilder",
          offer: "Initial Funding Offered : $13,000",
          discription: "Develop and implement a trading bot to monitor blockchain transactions, identify profitable opportunities, and automate token trading strategies.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        }, {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67408c56608c7b2c25dd8466_Your_paragraph_text__9_-removebg-preview%20(1).png",
          title: "BurnTech",
          offer: "Initial Funding Offered : $13,000",
          discription: "Develop a next-generation community platform for Burning Man, improving existing apps and leading the project to redefine how burners connect and engage.",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        }, {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/670edb224a6fd5c2a4360b54_Your_paragraph_text-removebg-preview%20(1).png",
          title: "MemeMates",
          offer: "Initial Funding Offered : $40,500",
          discription: "Meme-based dating app, creating vibrant user experiences that resonate with Gen Z!",
          deadline: "Deadline approaching! Apply by March 12, 2025!"
        },
        {
          image: "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66f792101c70a6d80f9e5794_paertner-loyalty-scanner-hero.png",
          title: "Partner Loyalty Checker",
          offer: "Initial Funding Offered : $23,000",
          discription: "AI-based platform for detecting dating profiles on popular apps, offering users essential relationship security insights",
          deadline: "Deadline approaching! Apply by March 13, 2025!"
        }

      ]
  return (
    <div className='pt-20 bg-black'>
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: "0 " }}
          transition={{ type: "tween", duration: 1 }}
          className="font-bold text-4xl max-sm:text-2xl text-center"
        >
          Ongoing Startupathon Challenges
        </motion.h1>
        <p className='italic text-lg font-normal text-[#cccccceb] text-center px-4'>Start your journey—tackle live challenges, earn equity, and lead the future.</p>
        <ul className="flex flex-wrap justify-center  items-center w-full px-10 max-sm:px-0 ">
          {startupation_challenges.map((each_data, index) => (
            <li
              key={index}
              className="relative cursor-pointer m-4 p-5 gap-2 flex flex-col border-1 border-[#8b62f3] justify-center items-center w-[350px] h-[380px] max-sm:w-auto text-white rounded-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-8xl hover:shadow-[0_3px_15px_2px_#3f2d6d]"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b62f3]/40 to-[#8b62f3]/40 opacity-50 transition-opacity duration-300 group-hover:opacity-0 max-sm:hidden"></div>

              <img
                src={each_data.image}
                className="w-[50%] h-auto rounded-md relative z-10"
                alt="Success Item"
              />
              <h1 className="relative z-10 font-bold text-2xl">{each_data.title}</h1>
              <p className="relative z-10 font-semibold text-[#8b62f3] text-xl">{each_data.offer}</p>
              <p className="text-center font-semibold text-sm relative z-10">{each_data.discription}</p>
              <p className="relative z-10 text-[#8b62f3] font-semibold flex items-center space-x-2">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a08bb798234106f88d71f_burning-p-500.png"
                  className="h-10"
                  alt="Time Icon"
                />
                <span className='gap-0'>{each_data.deadline}</span>
              </p>
              <button className="shadow-[0_1px_5px_0_rgba(139,98,243,0.5)]  cursor-pointer border border-[#8b62f3] p-2 w-full px-5 text-center rounded-[9px] font-semibold text-md text-white bg-gradient-to-r from-[#3f2d6d] via-[#7a56d6] to-[#9077ce] bg-[length:200%_100%] bg-[position:0%_50%] transition-[background-position] duration-700 ease-in-out hover:bg-[position:100%_50%]">
                View Challenge Details
              </button>

            </li>
          ))}
        </ul>

      </div>
  )
}

export default Ongoing