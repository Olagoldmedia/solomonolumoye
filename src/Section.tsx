
import podsMedia from "./assets/pods-media.jpg"
import podsMediaCreator from "./assets/pods-media-creators.jpg"
import CoopRecord from "./assets/coop-records.jpg"
import JamitWEb from "./assets/jamit-web.jpg"
import JamitMobile from "./assets/jamit-mobile.jpg"
import OrderNow from "./assets/odernow.jpg"
import {Link} from 'react-router-dom'
import { MoveUpRight } from 'lucide-react'
function Section() {
  return (
    <div className='mt-15 lg:mt-40'>
      <div className="flex items-center justify-between  bg-white lg:mb-16 pt-6 lg:pt-15" >
        <h2 className='text-[30px] sm:text-[40px] lg:text-[75px] font-semibold text-foreground border-b-3 border-foreground ml-6 lg:ml-15'>SELECTED WORK</h2>
      </div>
      <div className=" box-container p-6 lg:p-15 flex flex-wrap items-center justify-between w-[100%] m-auto gap-5 ">
        


        <div className="box box1 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] transition duration-300 ease hover:transform-[scale(1.04)] p-4 bg-gray-100 w-full">
                <img src={podsMedia} className='w-full h-full ' alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>POPs.MEDIA</h4>
                    <p className='text-gray-600'>2025</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Redesigned the pods.media homepage to make it platform to improve discovery of podcast episodes, top collectors, and trending content. I designed the leaderboard feature to help users track top collector...</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link to='/pods-media' target="_blank">Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link to='https://pods.media/' target="_blank" className='flex items-center justify-center gap-1'>View Website <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
        

        
        <div className="box box2 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] p-4 bg-gray-100 w-full">
                <img src={podsMediaCreator} className='w-full h-full ' alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>POPs.MEDIA</h4>
                    <p className='text-gray-600'>2025</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Redesigned the Pods.media creators platform to improve the user interface and make it easier for creators to publish podcast episodes on Base and track their earnings.</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link to='/pods-media-creator' target="_blank">Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link to="https://pods.media/" target="_blank" className='flex items-center justify-center gap-1'>View Website <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
        

        
        <div className="box box3 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] p-4 max-h-[300px] bg-gray-100 w-full overflow-hidden">
                <img src={CoopRecord} className="w-[33%] h-full m-auto" alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>COOP RECORDS</h4>
                    <p className='text-gray-600'>2025</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Collaborated with a designer on the Coop Records team to design the mobile app that lets fans support their favourite musicians early by investing in their songs through NFTs or tokens.</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link to="/coop-records" target="_blank">Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link to='https://cooprecords.xyz/' target="_blank" className='flex items-center justify-center gap-1'>View Website <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
        


        <div className="box box4 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] p-4 bg-gray-100 w-full">
                <img src={JamitMobile} className='w-[33%] h-full m-auto ' alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>JAMIT</h4>
                    <p className='text-gray-600'>2024</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Designed v1.0 of the Jamit mobile app, built for creators and listeners who believe stories should be owned, not rented. Listen to podcasts, audio series, and narrated stories. Create podcasts and generate...</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link target="_blank" to='/jamit-mobile'>Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link target="_blank" to='https://apps.apple.com/ng/app/jamit-stories-podcasts-ai/id6464237937' className='flex items-center justify-center gap-1'>View live App <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
        

        
        <div className="box box5 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] p-4 bg-gray-100 w-full">
                <img src={JamitWEb} className='w-full h-full ' alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>JAMIT</h4>
                    <p className='text-gray-600'>2024</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Designed components for the Jamit website and redesigned the Virtual Studio platform to enhance user appeal and streamline key actions, making it easier for users to download their recording sessions and invite...</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link target="_blank" to='/jamit-web'>Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link target="_blank" to='https://jamit.app/"' className='flex items-center justify-center gap-1'>View Website <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
        

        
        <div className="box box1 md:w-[47%] w-full lg:w-[30%] ">
                   
            <div className="img-box transition duration-300 ease hover:transform-[scale(1.02)] p-4 bg-gray-100 w-full">
                <img src={OrderNow} className='w-full h-full ' alt="" />
            </div>
            <div className="text-box text-left font-nomal">
                <div className="title py-6 flex items-center justify-between">
                    <h4 className='text-[1.4rem]'>ORDERNOW</h4>
                    <p className='text-gray-600'>2035</p>
                </div>
                <p className='text-gray-600 text-justify text-md'>Odernow is an on-demand delivery service that lets people order groceries from their favorite local supermarkets and get them delivered within an hour. I led the product design and also contributed to the...</p>
            </div>
            <div className="footer flex gap-2 text-sm py-3">
                <p className=' text-black border-b-1 border-gray-400 hover:text-gray-400'><Link target="_blank" to='/odernow'>Read More</Link></p>
                <span className="line w-[1px] bg-gray-400 h-4"></span>
                <p className=' text-black hover:text-gray-400'><Link target="_blank" to='https://odernow.netlify.app' className='flex items-center justify-center gap-1'>View Website <MoveUpRight size={10}/> </Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section
