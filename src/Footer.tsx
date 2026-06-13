import { useState } from 'react'
import {Link} from "react-router-dom"
import "./App.css"
import Samson from "./assets/samson.jpg"


function Footer() {   
    const [Show,SetShow]=useState(false);
    const [pos,SetPos]=useState({x: 0, y: 0});
    const HandleMouseMove= ( e ) => {
        SetPos({
            x: e.clientX- 100 ,
            y: e.clientY -100,
        });
    };

  return (
 

    <footer className='bg-black text-white p-6 lg:p-15 '>
        <div className="top-text flex justify-between md:flex-row sm:flex-col flex-wrap gap-8">
            <div className="left">
                <h2 className='text-[1.4rem] lg:w-full md:w-[80%]'>Got an interesting project in mind? Say Hi</h2>
                <Link to="mailto:olumoyesamson@gmail.com" className=" border-b-1 border-white hover:border-b-2 pb-1 transition duration-300 ease-in-out-in-out text-xl" >olumoyesamson@gmail.com</Link>
            </div>
            <div className="right text-left md:text-right lg:text-right flex flex-col gap-4">

            <Link to='/about' className="transition duration-300 ease-in-out text-gray-400 hover:text-white">About</Link>
            <Link to='https://drive.google.com/file/d/1Yy_iFZkOOmJEcNg5mecBQ1HUkWKT-mxQ/view?usp=sharing' className="transition duration-300 ease-in-out text-gray-400 hover:text-white">Resume</Link>
            <Link to='https://www.linkedin.com/in/olumoye/' className="transition duration-300 ease-in-out text-gray-400 hover:text-white">Linkedin</Link>
            <Link to='mailto:olumoyesamson@gmail.com' className=" text-gray-400 hover:text-white">Email</Link>
            <Link to='https://x.com/sammceen' className="transition duration-300 ease-in-out text-gray-400 hover:text-white">X (Formerly Twitter)</Link>

            </div>
        </div>
        <div onMouseEnter={() =>SetShow(true)} 
             onMouseLeave={()=> SetShow(false)} 
             onMouseMove={HandleMouseMove} 
             className="move cursor-pointer overflow-x-auto scrollbar-none flex items-center justify-center gap-5 mt-3">
            <div className="innerMove animate-move lg:animate-none md:animate-none whitespace-nowrap  flex gap-5 ">
            <div className=' text-[8.6rem] lg:text-[clamp(5.5rem,8vw,7.6rem)] md:text-[clamp(4rem,8vw,6rem)] text-center font-[900] pt-20'>SAMSON OLUMOYE        </div>
        </div>
            <div aria-hidden className="innerMove animate-move md:hidden  lg:hidden lg:animate-none md:animate-none whitespace-nowrap  flex gap-5 ">
            <div className=' text-[clamp(7.6rem,5vw,8rem)] text-center font-bold pt-20 '>SAMSON OLUMOYE         </div>
        </div>
            <div aria-hidden className="innerMove animate-move md:hidden md:animate-none lg:hidden lg:animate-none whitespace-nowrap  flex gap-5 ">
            <div className=' text-[clamp(7.6rem,5vw,8rem)] md:text-[7.6rem] text-center  font-bold pt-20 '> SAMSON OLUMOYE </div>
        </div>

        </div>
        {
            Show && (
                <img src={Samson} onMouseEnter={() =>SetShow(true)}  alt="" className='fixed pointer-events-none z-9999 w-[250px] h-[300px] rounded-lg hidden lg:block md:block object-cover'style={{top:pos.y, left:pos.x}} />
            )
        }
        <span className='flex gap-1 justify-end items-center w-full mb-3'>
            <p>WEBSITE BUILD BY </p><Link to="https://github.com/OlagoldMedia" className='border-dotted border-b-1 border-white hover:border-solid pb-1 transition duration-300 ease-in-out-in-out'> DOLZ</Link>
        </span>
    </footer>
  )
}

export default Footer
