
import Header from '../Header'
import Footer from '../Footer'
import { MoveLeft,X } from 'lucide-react'
import imgs1 from "../assets/solution.gif"
import imgs2 from "../assets/order-via-call.gif"
import imgs3 from "../assets/order-via-google-form.gif"
import imgs4 from "../assets/order-via-whatsapp.gif"
import imgs5 from "../assets/waitlist.gif"
import { Link } from 'react-router-dom'
import { useState } from 'react'


function OderNow() {
  
    const [open,setOpen]=useState(false);
    const [selectedImages,setSelectedImages]=useState("");
  
 
  return (
    <div>
      <Header/>
      <div className="podsMedia">
        <div className="back sticky right-0 top-20 left-0 px-10 py-5 text-xs font-bold backdrop-blur-[10px]  z-[77]">
           <Link to="/" className='text-gray-300 hover:text-black transition cursor-pointer duration-300 ease w-35 flex items-center gap-2'><MoveLeft size={12}/> BACK TO WORK</Link>
        </div>
        <div className="text w-[90%] md:w-[85%] lg:w-[70%] mt-20 m-auto">
            <h1 className='text-[4rem] font-semibold '>ODERNOW</h1>
            <p className='font-semibold py-10 text-[1.7rem]'>On-demand delivery app design and grocery delivery app UX for local supermarket shopping.</p>
            <p className='text-lg'>
              A product design and product management case study on Odernow, a delivery app product design MVP. Includes an example of a product requirements document example and details of a marketplace app UX design built using Google Forms, Linktree, and WhatsApp.
            </p>
            <div className="Roles py-10 grid grid-cols-2 lg:grid-cols-4  gap-10 flex-wrap">

              <div>
                <p className='font-semibold text-gray-400'>ROLE</p>
                <ol className='py-2 font-semibold'>
                  <li>Project Lead & Product Designer</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TIMELINE</p>
                <ol className='py-2 font-semibold'>
                  <li>2023</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>TEAM</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Software Engineer</li>
                  <li>Designer (ME)</li>
                  <li>Product Manager</li>
                </ol>
              </div>
              <div>
                <p className='font-semibold text-gray-400'>SKILLS</p>
                <ol className='py-2 font-semibold flex flex-col gap-3 '>
                  <li>Product Design</li>
                  <li>Product Strategy</li>
                  <li>User Research</li>
                  <li>Competitive Analysis</li>
                  <li>Prototyping </li>
                </ol>
              </div>
            </div> 
            
            <div className="overview">
          <p className='font-semibold text-gray-400 my-10'>PROBLEM STATEMENT </p>
          <p className='font-semibold text-[clamp(1rem,5vw,1.75rem)] '>Long queues and the inconvenience of navigating store aisles to find specific products often discourage Gen Z and millennials from shopping for groceries. This on-demand delivery app design aims to solve that.</p>
            <p className='font-semibold text-gray-400 my-10'>PROJECT GOALS  </p>
<p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600'>The goal of this product design and product management case study was to create a grocery delivery app UX MVP that allows users to order groceries from their preferred local supermarkets and have them delivered within an hour.</p>
             

            <p className='font-semibold text-gray-400 my-10'>SOLUTION</p>
          <p className='text-[clamp(1rem,0.9rem + 0.5vw , 1.125rem)]  text-gray-600 mb-10' >I designed a marketplace app UX design landing page with a prominent "Shop now" call-to-action button in the hero section. This button directs users to a Linktree page where they can choose how to place their order: via phone call, a Google form, or WhatsApp. I also contributed to the product requirements document example as the product manager to map out feature goals. Additionally, the landing page features a call-to-action button inviting users to sign up for our waitlist.</p>

              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs1); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs1} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>ODERNOW LANDING PAGE</p>

              </div>

            <p className='font-semibold text-gray-400 my-10'>DESIGN PROCESS</p>

          <p className=' text-gray-600 '>Before I started working on this product idea, I conducted research to understand the problem, the target audience, and the solutions offered by competitors in the market. I consider this design process essential because it informs my design decisions when creating a product that meets the needs of users.</p>  
       
            <p className='font-semibold text-gray-400 my-10'>RESEARCH & USER INSIGHT</p>

          <p className=' text-gray-600 '>During this process, I conducted user interviews to understand why people prefer not to go to the grocery store. I asked customers of my mom's store why they choose to order by calling my number or sending me a text message via WhatsApp instead of visiting the store in person. Some mentioned having children at home and being unable to leave them alone; while others cited not feeling well at times. Additionally, some mentioned feeling too tired after work and finding the trip to the store too strenuous.</p>  
       
            <p className='font-semibold text-gray-400 my-10'>COMPETITOR ANALYSIS</p>

          <p className=' text-gray-600 '>I researched the most commonly used platforms in Nigeria for ordering food and groceries online to better understand our competitors and how they are addressing this problem.</p>  
       

          <ul className='list-disc p-15 flex flex-col gap-5 text-gray-600'>
            <li>Chowdeck: Users can order food and groceries from nearby grocery stores or restaurants and have them delivered within minutes. Chowdeck also offers delivery services for restaurants and grocery stores that sign up on the platform.</li>
            <li>JumiaFood: Users can order food and groceries from nearby grocery stores or restaurants and have them delivered within minutes. JumiaFood also offers delivery services for restaurants and grocery stores that sign up on the platform.
</li>
            <li>Glovo: Users can order food and groceries from nearby grocery stores or restaurants and have them delivered within minutes. Glovo also offers delivery services for restaurants and grocery stores that sign up on the platform.
</li>
            <li>MANO: On MANO, users can order groceries and have them delivered within minutes. MANO allows restaurants and grocery stores to sign up on the platform, which has its own warehouse for storing the products featured on the platform.</li>
          </ul> 
 
            <p className='font-semibold text-gray-400 my-10'>HOW DOES THE PRODUCT SOLVE THE PROBLEM?</p>
          <p className=' text-gray-600  '>When a customer uses our product to place an order for groceries through Google Form, phone call, or WhatsApp, we send the customer's requested items and their phone number to the delivery person. The delivery person then goes to the supermarket chosen by the customer to purchase the items. Since we don't have a direct partnership with the supermarket, any products we buy must be paid for on the spot. After the delivery person has paid for the items, they proceed to deliver them to the customer. Upon delivery, the customer pays the delivery person after verifying the receipt from the supermarket, which confirms the purchase of the items. This process allows us to address the issue without the need to wait for weeks to establish a partnership with a supermarket or develop a mobile application.</p>  
      
      
            <p className='font-semibold text-gray-400 my-10'>HOW DOES THE PRODUCT SOLVE THE PROBLEM?</p>
      
      
            <p className='font-semibold text-gray-400 my-5 tracking-[0.2rem]'>ORDER VIA CALL</p>
          <p className=' text-gray-600 py-3 mb-10 '>This feature provides customers with a phone number they can use to contact us if they want to order groceries from the list of supermarkets available on our website.</p>  
       
          </div>
       


              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs2); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs2} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>ORDER VIA CALL</p>

              </div>
                
      
            <p className='font-semibold text-gray-400 mt-20 my-5 tracking-[0.2rem]'>ORDER VIA GOOGLE FORM</p>
          <p className=' text-gray-600 py-3 mb-10 '>This feature enables customers to easily order groceries by using the Google form we have created. They can fill in the details of what they need from the supermarket.</p> 


              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs3); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs3} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>ORDER VIA GOOGLE FORM</p>

              </div>
                
      
            <p className='font-semibold text-gray-400 mt-20 my-5 tracking-[0.2rem]'>ORDER VIA WHATSAPP</p>
          <p className=' text-gray-600 py-3 mb-10 '>This feature allows customers to contact us via WhatsApp to place their grocery orders from the list of supermarkets available on our website.</p> 


              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs4); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs4} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>ORDER VIA WHATSAPP</p>

              </div>
                
      
            <p className='font-semibold text-gray-400 mt-20 my-5 tracking-[0.2rem]'>WAITLIST PAGE</p>
          <p className=' text-gray-600 py-3 mb-10 '>This feature allows people who are not currently in the area where our services are available to sign up and receive notifications when we launch in their area.</p> 


              <div className='w-full flex flex-col justify-between cursor-zoom-in' onClick={()=>{setSelectedImages(imgs5); setOpen(true) }}>
                <div className="gif-container bg-gray-100 ">
                  <img src={imgs5} alt=""  />
                </div>
                <p className='img-text font-semibold text-gray-400 text-center'>WAITLIST PAGE</p>

              </div>
      
            <p className='font-semibold text-gray-400 mt-20 my-5 tracking-[0.2rem]'>REFLECTION</p>
          <p className=' text-gray-600 py-3 mb-10 '>This project was an exciting opportunity for me as someone who enjoys building products that solve real problems. It was especially interesting because I got to explore how to build an MVP using Linktree, Google form and WhatsApp. Overall, the experience helped me strengthen my skills as a product designer and expand my approach to product development.</p> 
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

export default OderNow


