import React from 'react'
import ReactPlayer from 'react-player'
import LoomPlayer from 'react-loom-player';
import { Chrono } from 'react-chrono';
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { AiFillPlaySquare } from "react-icons/ai";

function Startupathon_guide() {

    const timelineItemsList = [
        {
          title: "Dive into the Challenge Details Video",
          cardTitle: "It all starts here!",
          cardDetailedText:
            "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
          tip: "💡 Pro Tip: Pay attention—it’s more than just instructions. It’s your roadmap to success!",
          timelineCircle: <AiFillPlaySquare size={30} color="black" />,
        },
        {
          title: "Build, Submit & Shine",
          cardTitle: "Create & Submit",
          cardDetailedText:
            "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.",
          tip: "💡 Stay ahead: Submit on time or early to show your dedication!",
          timelineCircle: <FaBriefcase className="text-white text-2xl" />,
        },
        {
          title: "Get Feedback, Level Up!",
          cardTitle: "Improve & Resubmit",
          cardDetailedText:
            "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.",
          tip: "💡 Pro Tip: This feedback is gold. Use it to sharpen your submission or learn what it takes to win!",
          timelineCircle: <FaStar className="text-yellow-400 text-2xl" />,
        },
        {
          title: "Claim Your Crown",
          cardTitle: "Become the Project Leader",
          cardDetailedText:
            "Ace the challenge to become the project leader. Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent!",
        },
      ];
    
  return (
    <div className='bg-black text-white'>
          <div className='flex flex-col justify-center items-center pt-20  bg-black'>
            <h1 className='text-4xl font-bold max-sm:text-2xl px-10 text-center'>Found an idea that matches your skills?</h1>
            <p className='italic text-xl max-sm:text-md font-normal text-[#cccccceb] text-center px-4'>Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.</p>
    
            <div className="flex flex-col items-center p-6 max-w-4xl mx-auto">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            fontSizes={{
              cardTitle: "0.85rem",
              cardText: "0.8rem",
              cardTitle: "1rem",
              title: "1.4rem ",
            }}
            theme={{
              primary: "#3f2d6d",
              secondary: "transparent",
              cardBgColor: "white",
              titleColor: "#3f2d6d",
              titleColorActive: "#fff",
            }}
          >
            {timelineItemsList.map((item, index) => (
              <div key={index} className="p-4 shadow-md rounded-lg">
                <p className="text-gray-700">{item.cardDetailedText}</p>
                {item.tip && (
                  <p className="mt-2 text-sm font-semibold text-purple-600">
                    {item.tip}
                  </p>
                )}
              </div>
            ))}
          </Chrono>
        </div>
          </div>
    
          {/* Completed Startupathon */}
          <div className='flex flex-col justify-center items-center w-full bg-black'>
            <h1 className='text-3xl font-bold max-sm:text-xl px-10  text-center'>Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A Startupathon Success)</h1>
            <div className='m-10 border p-2 border-[#8b62f3] rounded-lg w-fit'>
              {/* <ReactPlayer url='https://youtu.be/dV83EugXUMo?si=bIoO3-i2rtRI54cB' className="controls aspect-video max-sm:w-100% max-sm:h-100% max-sm:hidden" /> */}
              <div className="w-[300px] h-[150px] sm:w-[700px] sm:h-[400px]">
                <ReactPlayer
                  url='https://youtu.be/pn_HoowYNTQ'
                  controls
                  width=""
                  height="100%"
                />
              </div>
            </div>
            <h1 className='text-3xl font-bold max-sm:text-2xl px-10 text-center text-white'>Our Hiring Process: Shared Through Candidate Stories
            </h1>
            <div className="m-10 border p-2 border-[#8b62f3] rounded-lg w-fit hidden sm:block">
              <LoomPlayer
                src="https://www.loom.com/share/0847b9257f144fd0830a8536dfbc8e81?sid=a30f65f8-30a7-4dfc-8fef-3cff2739fb44"
                autoplay
                style={{ width: "700px", height: "400px" }}
              />
            </div>
    
            {/* Mobile View (Hidden on Large Screens) */}
            <div className="m-10 border p-2 border-[#8b62f3] rounded-lg w-fit sm:hidden">
              <LoomPlayer
                src="https://www.loom.com/share/0847b9257f144fd0830a8536dfbc8e81?sid=a30f65f8-30a7-4dfc-8fef-3cff2739fb44"
                autoplay
                style={{ width: "300px", height: "150px" }}
              />
            </div>
    
          </div>
          <div className="relative w-fit max-sm:p-0 max-sm:mx-auto  p-10 h-full max-sm:w-[90%] bg-black">
      {/* Background Image */}
      <img 
        src="https://i.ibb.co/YBsrsgKm/Screenshot-2025-03-06-182712.png" 
        alt="" 
        className="h-50 max-sm:h-80   max-sm:w-90 object-cover border-2 border-[#8b62f3] rounded-xl"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col  justify-center items-center text-center text-white bg-black/50 p-4">
      <h1 className='font-bold text-3xl'>Got an idea of your own?</h1>
        <h1 className="text-lg font-medium mb-4 italic">
        We are always on the lookout for visionaries with great startup ideas, ready to become successful founders. If that’s you, apply below for our Fellowship program.
        </h1>
        <div className="absolute inset-0 bg-gradient-to-t from-[#8b62f3]/20 to-[#8b62f3]/20 opacity-50 transition-opacity duration-300 group-hover:opacity-0 max-sm:hidden"></div>
        
        <button className="bg-[#8b62f3] max-sm:w-full p-3 font-semibold rounded-md cursor-pointer">
            Apply For Fellowship
          </button>
      </div>
    </div>
    </div>
  )
}

export default Startupathon_guide