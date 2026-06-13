
import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import img7 from "../assets/7.png"
import img8 from "../assets/8.png"
import img9 from "../assets/9.png"
import img10 from "../assets/10.png"
import img11 from "../assets/11.png"
import img12 from "../assets/12.png"
import img13 from "../assets/13.png"
import img14 from "../assets/14.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function CoopRecords() {
  
    const [open,setOpen]=useState(false);
    const [selectedImages,setSelectedImages]=useState("");
  const Images=[
    { id:1,
      image:img1,
      title:"WELCOME SCREEN"
    },
    { id:2,
      image:img2,
      title:"ONBOARDING & ADD FUNDS"
    },
    { id:3,
      image:img3,
      title:"PRESALE, COINS & DEPOSIT"
    },
    { id:4,
      image:img4,
      title:"PRESALE (STATS, HOLDERS, & ACTIVITY)"
    },
    { id:5,
      image:img5,
      title:"PRESALE PURCHASE"
    },
    { id:6,
      image:img6,
      title:"COIN (STATS, HOLDERS, & ACTIVITY)"
    },
    { id:7,
      image:img7,
      title:"COIN (BUY & SELL)"
    },
    { id:8,
      image:img8,
      title:"SEARCH"
    },
    { id:9,
      image:img9,
      title:"ARTIST & USER PROFILE"
    },
    { id:10,
      image:img10,
      title:"SETTINGS"
    },
    { id:11,
      image:img11,
      title:"PRESALE COMPONENT DESIGN FOR THE COOP RECORDS WEBSITE"
    },
    { id:12,
      image:img12,
      title:"DARK THEME DESIGN FOR COOP RECORDS WEBSITE"
    },
  
    { id:13,
      image:img13,
      title:"LEADERBOARD (COLLECTORS)"
    },
  
    { id:14,
      image:img14,
      title:"LEADERBOARD (HOLDERS)"
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
            <h1 className='text-[4rem] font-semibold '>COOP RECORDS</h1>
            <p className='font-semibold py-10 text-[1.7rem]'>Music app product design and Web3 music app UX enabling fans to support musicians early through tokenized assets.</p>
            <p className='text-lg'>
              How I collaborated to design a tokenized music platform design and fan investment app design. We developed a music NFT platform design and music presale app design, creating an artist fan engagement platform for early music support.
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
                  <li>October - November 2025</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TEAM</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 p-4 '>
                  <li>Designer (ME)</li>
                  <li>Software Engineer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>SKILLS</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Product Design</li>
                  <li>Design System</li>
                  <li>Competitive Analysis</li>
                </ol>
              </div>
            </div> 
            
            <div className="overview">
          <p className='font-semibold text-gray-400 my-15'>OVERVIEW </p>
          <p className='font-semibold text-[1.7rem]'>Web3 Music App UX and Tokenized Music Platform Design</p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)] py-10 text-gray-600'>I joined the Coop Records team to work on music app product design, collaborating with another designer on their mobile app, website components, and a video clipping platform that allows fans to share clips from their favourite artists shows on social media and earn in USD.</p>
          <p className=' text-gray-600 '>Together, we designed an artist fan engagement platform where fans can post highlights and earn. I also crafted the Web3 music app UX for the mobile fan investment app design, letting fans support artists early through a music presale app design and music NFT platform design. In addition, I contributed to the website design system, updating and creating components to improve consistency and usability across the platform.</p>  


        <p className=' text-gray-600 py-10'>Feel free to reach out to learn more about my works at Coop Records</p> 
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
      
export default CoopRecords
