
import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function PodsMedia() {
     const [open,setOpen]=useState(false);
      const [selectedImages,setSelectedImages]=useState("");
    const Images=[
      { id:1,
        image:img1,
        title:"HOMEPAGE SCREEN"
      },
      { id:2,
        image:img2,
        title:"SEARCH"
      },
      { id:3,
        image:img3,
        title:"COLLECTORS"
      },
      { id:4,
        image:img4,
        title:"SHARE & EARN"
      },
      { id:5,
        image:img5,
        title:"EXPLORE PODCASTS"
      },
      { id:6,
        image:img6,
        title:"LEADERBOARD"
      },
      { id:7,
        image:img7,
        title:"REWARDS"
      },
      { id:8,
        image:img8,
        title:"PROFILE"
      },
      { id:9,
        image:img9,
        title:"PODCAST DETAILS"
      },
      { id:10,
        image:img10,
        title:"EPISODE DETAILS"
      },
      { id:11,
        image:img11,
        title:"MEDIA PLAYER "
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
            <h1 className='text-[4rem] font-semibold '>PODS.MEDIA</h1>
            <p className='font-semibold py-10 text-[1.7rem]'>Web3 podcast platform design and homepage redesign focused on boosting discoverability and collector engagement.</p>
            <p className='text-lg'>
              This podcast product design case study details how we redesigned the pods.media homepage to improve podcast discovery platform design, introduce Web3 homepage redesign strategies, and implement a collector leaderboard UX design to drive community competition.
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
          <p className='font-semibold text-[1.7rem]'>Redesigning the Homepage for Web3 Podcast Platform Design & Discovery</p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)] py-10 text-gray-600'>I joined the Pods team as a Product Designer to lead this podcast product design case study, focusing on a Web3 homepage redesign. The homepage is the primary entry point where listeners discover podcast episodes either to listen to or mint as NFTs to support creators.</p>
          <p className=' text-gray-600 '>I collaborated with three engineers and one product manager to deliver creator platform UX design improvements. Our work focused on</p>  

          <ul className='list-disc p-15 flex flex-col gap-5 text-gray-600'>
            <li>Showcasing playlists featuring multiple episodes for podcast discovery platform design</li>
            <li>Surfacing episodes through curated categories like Trending, For You, and New
</li>
            <li>Introducing a Collector leaderboard UX design to drive competition among top collectors</li>
            <li>Designing an advanced search feature that allows users to find pods, episodes, guests, and topics easily</li>
          </ul> 
        <p className=' text-gray-600 '>Our goal was to make the homepage more dynamic, increase discoverability, and boost engagement from collectors using the platform</p> 

        <p className=' text-gray-600 py-10'>Feel free to reach out if you'd like to learn more about this project.</p> 
          </div>

        </div>
       <div className="imageS flex flex-wrap gap-15 p-10">

        { Images.map((items, index)=>(
           <div key={index} className='w-full md:w-[45%] lg:w-[45%] cursor-zoom-in' onClick={()=>{setSelectedImages(items.image); setOpen(true) }}>
            <div className=" bg-gray-100 py-8 px-20 overflow-hidden ">
              <img src={items.image} alt="" className='w-full object-contain h-full' />
            </div>
              <p className='font-semibold text-gray-400 my-10 text-center'>{items.title}</p>
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

export default PodsMedia
