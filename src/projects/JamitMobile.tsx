
import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import img1 from "../assets/1 (1).png"
import img2 from "../assets/2 (1).png"
import img3 from "../assets/3 (1).png"
import img4 from "../assets/4 (1).png"
import img5 from "../assets/5 (1).png"
import img6 from "../assets/6 (1).png"
import img7 from "../assets/7 (1).png"
import img8 from "../assets/8 (1).png"
import img9 from "../assets/9 (1).png"
import img10 from "../assets/10 (1).png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function JamitMobile() {
  
    const [open,setOpen]=useState(false);
    const [selectedImages,setSelectedImages]=useState("");
  const Images=[
   
    { id:1,
      image:img1,
      title:"ONBOARDING"
    },
    { id:2,
      image:img2,
      title:"HOME SCREEN"
    },
    { id:3,
      image:img3,
      title:"MEDIA PLAYER"
    },
    { id:4,
      image:img4,
      title:"WALLET & MARKETPLACE FOR HEADPHONES"
    },
    { id:5,
      image:img5,
      title:"PODCASTS, EPISODES, & COMMENT"
    },
    { id:6,
      image:img6,
      title:"SEARCH"
    },
    { id:7,
      image:img7,
      title:"LIBRARY"
    },
    { id:8,
      image:img8,
      title:"CREATE & IMPORT PODCAST"
    },
  
    { id:9,
      image:img9,
      title:"PROFILE & PODCAST ANALYTICS"
    },
  
    { id:10,
      image:img10,
      title:"SETTINGS & ACCOUNT"
    },
  ]
  return (
    <div>
      <Header/>
      <div className="podsMedia">
        <div className="back sticky right-0 top-20 left-0 px-10 py-5 text-xs font-bold backdrop-blur-[10px]  z-[77]">
           <Link to="/" className='text-gray-300 hover:text-black transition cursor-pointer duration-300 ease w-35 flex items-center gap-2'><MoveLeft size={12}/> BACK TO WORK</Link>
        </div>
        <div className="text w-[90%] md:w-[80%] lg:w-[70%] mt-20 m-auto">
            <h1 className='text-[4rem] font-semibold '>JAMIT</h1>
            <p className='font-semibold py-10 text-[1.7rem]'>Podcast app design and audio storytelling app design using AI and blockchain technology.</p>
            <p className='text-lg'>
              A mobile app product design case study on building Jamit's audio creator app design. We designed a podcast mobile app UX with integrated AI audio app design tools and a creator monetization app system for onchain audio stories.
            </p>
            <div className="Roles py-10 grid grid-cols-2 lg:grid-cols-4  gap-10 flex-wrap">

              <div>
                <p className='font-semibold text-gray-400'>ROLE</p>
                <ol className='py-2 font-semibold'>
                  <li>Product Designer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TIMELINE</p>
                <ol className='py-2 font-semibold'>
                  <li>2022 - 2024</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TEAM</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Designer (ME)</li>
                  <li>Software Engineer</li>
                  <li>iOS Engineer</li>
                  <li>Android Engineer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>SKILLS</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Product Design</li>
                  <li>Product Strategy</li>
                  <li>User Research </li>
                  <li>Competitive Analysis</li>
                  <li>Prototyping </li>
                </ol>
              </div>
            </div> 
            
            <div className="overview">
          <p className='font-semibold text-gray-400 my-15'>PROBLEM STATEMENT </p>
          <p className='font-semibold text-[1.7rem]'>Diverse audio creators often face challenges in getting their voices heard on major audio streaming platforms. This struggle hinders their ability to monetize their content on creator monetization apps.</p>
            <p className='font-semibold text-gray-400 my-15'>USER GOALS  </p>

             <ul className='list-disc px-15 flex flex-col gap-5 text-gray-600'>
            <li>Content creators: They can record, publish, distribute, and monetize their audio content, such as audio stories and podcasts, while also building a global audience on creator monetization apps.</li>
            <li>Listeners: They can discover a wide range of audio stories and podcasts, follow their favorite creators, and engage with a vibrant community.
</li>
          </ul> 

            <p className='font-semibold text-gray-400 my-15'>DESIGN PROCESS  </p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>As a Product Designer at Jamit, my first task was to lead this mobile app product design case study and redesign the podcast mobile app UX. The goal was to provide an audio creator app design where creators can record, publish, distribute, and monetize their content.</p>
          <p className=' text-gray-600 '>To start, I focused on understanding the target audience and their pain points. I conducted interviews to gather insights about their experiences with Jamit and other audio-streaming platforms. Building upon these insights, I then conducted a competitive analysis of various platforms used by both creators and listeners. This analysis aimed to identify solutions to similar problems.</p>  
          <p className="text-gray-600">
            Finally, armed with the research data, I narrowed down the features based on their potential to help users achieve their goals on the Jamit podcast app design.
          </p>
          <p className='font-semibold text-gray-400 my-15'>RESEARCH & USER INSIGHT  </p>
        <p className=' text-gray-600'>During this process, I conducted user interviews to identify user pain points and gain insight into how current Jamit app users engage with it. Additionally, I researched alternative platforms that users utilize to address these pain points.</p> 
          <p className='font-semibold text-gray-400 my-15'>COMPETITION ANALYSIS  </p>
        <p className=' text-gray-600'>During this phase, I analyzed popular audio platforms such as Spotify, Spotify for Podcasters (formerly Anchor), Audiomack, and SoundCloud. I also considered YouTube, which is well-known among creators of both audio and video content worldwide. My objective was to examine the strategies these platforms have implemented to address diversity issues on their platform. This analysis provided valuable insights that helped shape Jamit's approach to empowering diverse audio creators.</p> 
          </div>

        </div>
       <div className="imageS flex flex-wrap md:gap-15 gap-20 p-10">

        { Images.map((items, index)=>(
           <div key={index} className='w-full md:w-[45%] lg:w-[45%] flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(items.image); setOpen(true) }}>
            <div className="img-container bg-gray-100 ">
              <img src={items.image} alt=""  />
            </div>
            <p className='img-text font-semibold text-gray-400 text-center'>{items.title}</p>

          </div>


      
         
       )) 
       
       }
         
  <p className='font-semibold text-gray-400 '> REFLECTION  </p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem) text-black font-semibold'>This project was a valuable learning curve for me as a Product Designer, presenting both challenges and growth opportunities. Working as the sole designer on this mobile application was both exciting and rewarding, especially knowing it would help audio creators monetize their content on Jamit. Being part of this mission brought me real joy, and the experience significantly sharpened my user research and design skills.</p>
       </div>

      </div>
      <Footer/>
      <div
  className={`
    fixed inset-0 z-[9999]
    flex items-center justify-center
    bg-gray-100
    transition-all duration-500
    ${
      open
        ? "opacity-100 visible"
        : "opacity-0 invisible"
    }
  `}
>
  <button
    className="absolute top-5 right-5 p-3 z-[99999] rounded-full bg-black/20"
    onClick={() => setOpen(false)}
  >
    <X />
  </button>

  <div
    className={`
      bg-black/30 shadow-2xl lg:px-8 lg:w-[85%] w-[95%] h-[80%]
      transition-all duration-500 ease-out 
      ${
        open
          ? "scale-100 translate-y-0"
          : "scale-90 translate-y-10"
      }
    `}
  >
    <img
      src={selectedImages}
      alt=""
      className="w-full h-[100%] object-contain p-0" 
    />
  </div>
</div>
    </div>
  )
}

export default JamitMobile
