import React from 'react'
import { useState } from 'react';
import LoomPlayer from 'react-loom-player';
;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function home() {
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
 

  let success_data = [
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
      description: "Competitive Salary",
      data: "Begin your journey stress-free."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
      description: "≥ $10,000 USD in Company Funding",
      data: "Kickstart your venture with solid funding."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
      description: "≥ 10% Founder Equity",
      data: "Own your share in what you create."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
      description: "≥ $100,000 USD AWS Credits",
      data: "Harness AWS for robust infrastructure."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
      description: "$1,000 OpenAI Credits",
      data: "Leverage cutting-edge AI to build smart solutions."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
      description: "$120,000 USD IBM Cloud Credits",
      data: "Innovate with IBM Cloud."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
      description: "$2,500 Twilio Credits",
      data: "Powerful APIs for messaging, voice, and video."
    },
    {
      image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
      description: "$2,000 Airtable Credits",
      data: "Streamline your startup with Airtable."
    },

  ]

  return (
    <div className='bg-black text-white flex  flex-col justify-start items-center'>
      <div className="relative w-full h-[40%]    max-sm:h-[10%]  flex justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
          alt="members"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08020f]"></div>
      </div>
      <h1 className="text-8xl max-sm:text-5xl font-[Syne,sans-serif] font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#8b62f3] to-[#fff] 
  bg-[length:200%_100%] animate-gradient">
        Startupathon
      </h1>
      <p className='font-[Syne, sans-serif] font-semibold text-3xl max-sm:text-lg text-center px-4'>Your Chance to Build, Lead, and Succeed as a Founder</p>
      <div className="m-10 border p-2 border-[#8b62f3] rounded-lg w-fit hidden sm:block">
        <LoomPlayer
          src="https://www.loom.com/share/996f59a2e5c34fd38b86544833c23dde?sid=0061945a-d67e-417f-bf62-6052f278d9e7"
          autoplay
          style={{ width: "700px", height: "400px" }}
        />
      </div>

      {/* Mobile View (Hidden on Large Screens) */}
      <div className="m-10 border p-2 border-[#8b62f3] rounded-lg w-fit sm:hidden">
        <LoomPlayer
          src="https://www.loom.com/share/996f59a2e5c34fd38b86544833c23dde?sid=0061945a-d67e-417f-bf62-6052f278d9e7"
          autoplay
          style={{ width: "300px", height: "150px" }}
        />
      </div>
      <div className="m-10 flex justify-center items-center gap-7 flex-wrap">
        <button className="relative p-3 flex justify-center items-center gap-3 max-sm:w-full mx-auto bg-[#3f2d6d] hover:bg-[#8b62f3] rounded-lg font-semibold text-lg 
                     shadow-xl overflow-hidden before:absolute before:inset-0 before:rounded-lg before:animate-wave">
          Ongoing Startupathon
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png"
            alt="Sound Icon"
            className="w-6 h-6"
          />
        </button>
        <button className="relative p-3 max-sm:w-full flex justify-center items-center gap-3 bg-[#3f2d6d] hover:bg-[#8b62f3] rounded-lg font-semibold text-lg flex items-center gap-2 
                     shadow-xl overflow-hidden before:absolute before:inset-0 before:rounded-lg before:animate-wave">
          Startupathon Guide
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
            alt="Sound Icon"
            className="w-6 h-6"
          />
        </button>

        <button className="relative p-3  bg-[#3f2d6d] hover:bg-[#8b62f3] rounded-lg font-semibold text-lg 
                    flex justify-center items-center gap-3 max-sm:w-full shadow-xl overflow-hidden">
          Past Startupathon
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png"
            alt="Checked Icon"
            className="w-6 h-6"
          />
        </button>

        <button className="relative p-3 flex justify-center items-center gap-3 max-sm:w-full bg-[#3f2d6d] hover:bg-[#8b62f3] rounded-lg font-semibold text-lg  
                     shadow-xl overflow-hidden before:absolute before:inset-0 before:rounded-lg before:animate-wave">
          Mentor Network
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png"
            alt="Sound Icon"
            className="w-6 h-6"
          />
        </button>

      </div>

      <h1 className='font-bold text-3xl text-center max-sm:text-2xl'>Startupathon Success Comes with Extraordinary Rewards</h1>


      <ul className="flex flex-wrap justify-center items-center w-[80%] mx-auto max-md:hidden">
        {success_data.map((each_data, index) => (
          <li
            key={index}
            className="bg-[#42307324] relative shadow-[0_3px_15px_2px_#3f2d6d] rounded-md m-4 p-5 flex flex-col justify-center items-center w-[160px] h-[170px] hover:bg-[#8b62f3]/15 text-white group overflow-hidden"
          >

            <img
              src={each_data.image}
              className="w-[50%] h-auto rounded-md mb-2"
              alt="Success Item"
            />
            <p className="text-center font-semibold text-sm">{each_data.description}</p>
          </li>
        ))}
      </ul>

      <div className="md:hidden w-full flex justify-center items-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {success_data.map((each_data, index) => (
              <CarouselItem key={index} className="flex justify-center items-center">
                <div className="p-1">

                  <div className="bg-[#42307324] shadow-[0_3px_15px_2px_#3f2d6d] rounded-md m-4 p-5 flex flex-col justify-center items-center w-[200px] h-[250px] text-white">
                    <img
                      src={each_data.image}
                      className="w-[50%] h-auto rounded-md mb-2"
                      alt="Success Item"
                    />
                    <p className="text-center font-semibold text-sm">{each_data.description}</p>
                    <p className='text-center'>{each_data.data}</p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 transform -translate-y-1/2 bg-[#8b62f3]" />
          <CarouselNext className="right-2 top-1/2 transform -translate-y-1/2 bg-[#8b62f3]" />
        </Carousel>
      </div>
      
    </div>
  )
}

export default home