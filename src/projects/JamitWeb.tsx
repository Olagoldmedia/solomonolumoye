



import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import img1 from "../assets/1 (2).png"
import imgs1 from "../assets/image-1.gif"
import imgs2 from "../assets/image-2.gif"
import img2 from "../assets/2 (2).png"
import img3 from "../assets/3 (2).png"
import img4 from "../assets/4 (2).png"
import img5 from "../assets/5 (2).png"
import img6 from "../assets/6 (2).png"
import img7 from "../assets/7 (2).png"
import img8 from "../assets/8 (2).png"
import img9 from "../assets/9 (2).png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function JamitWeb() {
  
    const [open,setOpen]=useState(false);
    const [selectedImages,setSelectedImages]=useState("");
  const Images=[
   
    { id:1,
      image:img1,
      title:"SESSIONS"
    },
    { id:2,
      image:img2,
      title:"RECORDINGS INTERFACE"
    },
    { id:3,
      image:img3,
      title:"CREATE A SESSION"
    },
    { id:4,
      image:img4,
      title:"EDIT A SESSION"
    },
    { id:5,
      image:img5,
      title:"RECORDINGS INTERFACE"
    },
    { id:6,
      image:img6,
      title:"JOIN SESSION"
    },
    { id:7,
      image:img7,
      title:"Live Recording Interface with Participant View"
    },
    { id:8,
      image:img8,
      title:"LIVE RECORDING INTERFACE"
    },
  
    { id:9,
      image:img9,
      title:"ADD PARTICIPANTS TO SESSION"
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
            <p className='font-semibold py-10 text-[1.7rem]'>Redesigning the Virtual Studio for Jamit's audio creator app design.</p>
            <p className='text-lg'>
              Enhancing the web-based virtual studio for Jamit's audio storytelling app design. Streamlining the user experience for creators to record studio-quality audio, manage recording sessions, and download their media.
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
                  <li>2024</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TEAM</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Designer (ME)</li>
                  <li>Software Engineer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>SKILLS</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Product Design</li>
                  <li>Product Strategy</li>
                  <li>Competitive Analysis</li>
                  <li>Prototyping </li>
                </ol>
              </div>
            </div> 
            
            <div className="overview">
          <p className='font-semibold text-gray-400 my-10'>PROBLEM STATEMENT </p>
          <p className='font-semibold text-[1.7rem]'>The current user interface of the Virtual Studio lacks visual appeal for creators and makes it difficult for them to locate the download button after completing a recording.</p>
            <p className='font-semibold text-gray-400 my-10'>USER GOALS  </p>
<p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>The user's goal for this project was to create a design that enhances the user experience for creators on the audio creator app design virtual studio. This includes the ability to initiate a recording session, access their recordings, and download them at any time.</p>
             

            <p className='font-semibold text-gray-400 my-10'>CURRENT UI ISSUES</p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>As a Product Designer at Jamit, my first task was to lead this mobile app product design case study and redesign the podcast mobile app UX. The goal was to provide an audio creator app design where creators can record, publish, distribute, and monetize their content.</p>
          <p className=' text-gray-600 py-10 '>There is no separate screen for users to find their recordings after they have finished recording. Instead, it is mixed in with the manage sessions screen</p>  
       
          </div>
       


              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs1); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs1} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>CURRENT SESSIONS SCREEN</p>

              </div>
                <p className=' text-gray-600 py-5'>The live recording page for the Virtual Studio does not have an appealing user interface design and requires improvement.</p>
              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs2); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs2} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>CURRENT SESSIONS SCREEN</p>

              </div>

              <p className='font-semibold text-gray-400 my-10'>DESIGN PROCESS</p>
                  <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>I began by questioning the purpose ('why') behind the current design of the Virtual Studio, specifically how users interact with it to access their recordings after completing the recording process. Additionally, I conducted a competitor analysis to explore how other video and audio recording platforms tackle this problem for their users. These steps were crucial in guiding my design approach and informing my decision-making process when developing a solution.</p>  
          
         
              <p className='font-semibold text-gray-400 my-10'>RESEARCH & USER INSIGHT</p>
                  <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>Based on my research on how users interacted with the current design for the Virtual Studio, I discovered that many users who use the platform and complain about the issue of accessing their recordings for downloads were confused by the 'manage' CTA button. They mistakenly believed that it was for editing session details or adding participants before starting a recording. Additionally, the recordings component was located on the same screen.</p>     
          
         
              <p className='font-semibold text-gray-400 my-10'>COMPETITOR ANALYSIS</p>
                  <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600 '>During this process, I examined Zoom and Google Meet, as they are commonly used platforms for video recording. I also looked into Riverside.fm, which is popular among creators for recording high-quality audio and video for their content. I conducted this analysis to understand how their users download their recordings once they have finished recording or whenever they wish to do so.</p>     
    
        </div>
       
       <div className="imageS flex flex-wrap md:gap-15 gap-20 p-10">

        { Images.map((items, index)=>(
           <div key={index} className='w-full md:w-[45%] lg:w-[45%] flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(items.image); setOpen(true) }}>
            <div className="img-container bg-gray-100 ">
              <img src={items.image} alt=""  />
            </div>
            <p className='img-text uppercase font-semibold text-gray-400 text-center'>{items.title}</p>

          </div>


      
         
       )) 
       
       }
         
  
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

export default JamitWeb
