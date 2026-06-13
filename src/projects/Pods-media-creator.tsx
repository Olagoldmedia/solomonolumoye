
import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import img1 from "../assets/1 (1).jpg"
import img2 from "../assets/2 (1).jpg"
import img3 from "../assets/3 (1).jpg"
import img4 from "../assets/4 (1).jpg"
import img5 from "../assets/5 (1).jpg"
import img6 from "../assets/6 (1).jpg"
import img7 from "../assets/7 (1).jpg"
import img8 from "../assets/8 (1).jpg"
import img9 from "../assets/9 (1).jpg"
import img10 from "../assets/10 (1).jpg"
import img11 from "../assets/11 (1).jpg"
import img12 from "../assets/12.jpg"
import img13 from "../assets/13.jpg"
import img14 from "../assets/14.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function PodsMediaCreator() {
  
    const [open,setOpen]=useState(false);
    const [selectedImages,setSelectedImages]=useState("");
  const Images=[
    { id:1,
      image:img1,
      title:"DASHBOARD"
    },
    { id:2,
      image:img2,
      title:"RSS FEEDS"
    },
    { id:3,
      image:img3,
      title:"IMPORT EPISODES"
    },
    { id:4,
      image:img4,
      title:"EPISODES SCREEN"
    },
    { id:5,
      image:img5,
      title:"EPISODES WITH SORTING"
    },
    { id:6,
      image:img6,
      title:"SETTINGS FOR PODCAST"
    },
    { id:7,
      image:img7,
      title:"DASHADDING SOCIAL LINKS FOR PODCASTSBOARD"
    },
    { id:8,
      image:img8,
      title:"SETTINGS FOR TEAM"
    },
    { id:9,
      image:img9,
      title:"EDIT USER PERMISSIONS"
    },
    { id:10,
      image:img10,
      title:"ADD TEAM MEMBBERS"
    },
    { id:11,
      image:img11,
      title:"EPISODE DETAILS"
    },
    { id:12,
      image:img12,
      title:"SCHEDULING EPISODES FOR PUBLISH"
    },
  
    { id:13,
      image:img13,
      title:"ADDING RECIPIENTS"
    },
  
    { id:14,
      image:img14,
      title:"EARNINGS SCREEN"
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
            <h1 className='text-[4rem] font-semibold '>PODS MEDIA</h1>
            <p className='font-semibold py-10 text-[1.7rem]'>Web3 creator dashboard UX and podcast publishing platform design on Base to simplify episode uploads and track monetization.</p>
            <p className='text-lg'>
              A creator dashboard design case study for the pods.media Web3 publishing platform. I focused on building creator tools to simplify podcast publishing platform design, manage team permissions, and track real-time revenue with a dedicated creator earnings dashboard.
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
                  <li>April - July 2025</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TEAM</p>
                <ol className='py-2 font-semibold list-decimal flex flex-col gap-3 p-4 '>
                  <li>Designer (ME)</li>
                  <li>Software Engineer</li>
                  <li>Product Designer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>SKILLS</p>
                <ol className='py-2 font-semibold'>
                  <li>Product Design</li>
                  <li>Product Strategy</li>
                  <li>Prototyping</li>
                  <li>Competitive Analysis</li>
                </ol>
              </div>
            </div> 
            
            <div className="overview">
          <p className='font-semibold text-gray-400 my-10'>OVERVIEW & GOALS</p>
          <p className='font-semibold text-[1.7rem]'>Redesigning the Podcast Creator Dashboard for Seamless Web3 Publishing</p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)] py-10 text-gray-600'>I worked on this product to design a Web3 creator dashboard UX, focused on building features that help creators publish episodes on the Base network and engage with supporters (collectors). The Creators Dashboard is where creators can start a new podcast, manage their shows, and publish episodes on the Base network.</p>
          <p className=' text-gray-600 '>I collaborated with three engineers and one product manager to redesign the podcast creator dashboard. My work focused on:</p>  

          <ul className='list-disc p-15 flex flex-col gap-5 text-gray-600'>
            <li>Designing a creator earnings dashboard and creator monetization dashboard to monitor collector activity and withdrawals with ease</li>
            <li>Enabling creators to import episodes via RSS feed for efficient podcast publishing platform design
</li>
            <li>Creating a settings feature to invite and manage team members</li>
            <li>Designing a streamlined earnings page where creators can view and withdraw their earnings with ease</li>
          </ul> 
        <p className=' text-gray-600 '>Our goal was to help creators earn their first dollar, expand tooling to interact with collectors, support easy onboarding of new shows via email, and enable episode uploads with as few clicks as possible. We also focused on simplifying channel management, allowing creators to edit all aspects of their show, and providing default publishing settings to reduce setup friction.</p> 

        <p className=' text-gray-600 py-10'>Feel free to reach out if you'd like to learn more about this project.</p> 
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


export default PodsMediaCreator
