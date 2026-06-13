
import Header from './Header'
import Footer from './Footer'
import samson from './assets/samson.jpg'

function About() {
  return (
    <div>
        <Header/>
        <section className='p-4 md:p-8 lg:p-15'>
            <h2 className='text-[clamp(2.7rem,8vw,8rem)] font-[800] text-center '>SAMSON OLUMOYE</h2>
      <div className="img-box mt-10">
        <img src={samson} className='object-cover w-full h-[90%]' alt="" />
      </div>
      <div className="sub flex justify-between" >
        <p className='hidden lg:block' > .</p>
        <h2 className='font-semibold text-[clamp(1.4rem,4vw,2.2rem)] lg:w-[65%] py-15'>Startup Product Designer & Manager helping global startups design Web3 platforms, creator tools, and mobile app experiences.</h2>
      </div>
      <div className="about flex flex-wrap justify-between">
        <h2 className="title uppercase font-semibold  text-[1rem] my-10 tracking-[0.155rem]">About me</h2>
        <div className="info w-full lg:w-[62%] md:w-[62%]">
            <p className="text-gray-700 mb-5">
                My name is Samson Olumoye. I'm an African product designer and product manager with over 5+ years of experience spanning product design and product management. As a remote product designer, I specialize as a Web3 and mobile app designer, building products for startups and creator economy products.
            </p>
            <p className="text-gray-700 mb-5">
                I began my journey into tech working on different projects with friends and dev shops I hired using my savings. From 2020 to 2022, I led four different projects in this capacity.
            </p>
            <p className="text-gray-700 mb-5">
                In 2022, I discovered Product Design, and it immediately clicked with me, it gave me the ability to communicate ideas visually and collaborate better with my team. Since then, I've spent the last three years working as a UX designer for global startups. Based in Nigeria, I enjoy helping startups build from 0 to 1 and improve user experiences through user-centered design.
            </p>
        </div>
      </div>
      <div className="about flex flex-wrap justify-between my-10">
        <h2 className="title uppercase font-semibold text-[1rem] tracking-[0.155rem] my-10 ">Work Experience</h2>
        <div className="info w-full lg:w-[62%] md:w-[62%]">
            <div className="breakthorough my-5 flex justify-between items-center text-[1.2rem]">
                <p className='font-[600]'>Breakthrough Apps</p>
                <p className="text-gray-400 font-[400] text-[0.8rem]">DEC - PRESENT</p>
            </div>
            <p className="font-[600] py-3 text-gray-400">Product Designer   </p>
            <p className="text-gray-700 mb-5">
                At Breakthrough Apps, I design product features and create branded social media assets for wellness and fitness coaches.
            </p>
            <ul className='px-7 text-gray-700  list-disc '>
                <li>Designed End-of-Year Wrapped graphics for 10+ coaches, showcasing user highlights and driving engagement.</li>
                <li>Created visual assets used in ad campaigns, helping increase visibility and drive traffic to apps built by the Breakthrough Apps team.</li>
             
            </ul>
            <div className="breakthorough my-5 flex justify-between items-center text-[1.2rem] mt-15">
                            <p className='font-[600]'>Coop records</p>
                            <p className="text-gray-400 font-[400]  text-[0.8rem]">OCT - NOV 2025</p>
            </div>
             <p className="text-gray-700 mb-5">
                At Coop Records, I collaborated with another designer to build a mobile application where fans can support their favorite musicians early by investing in their songs through NFTs or tokens.
            </p>
             <ul className='px-7 text-gray-700  list-disc '>
                <li>I designed several key components for the website, improving mobile navigation between the Presales and Coins sections.</li>
                <li>I also collaborated on a platform that enables people to share Coop Records artist videos on social media and earn in USD.</li>
             
            </ul>
            <div className="breakthorough my-5 flex justify-between items-center text-[1.2rem] mt-15">
                            <p className='font-[600]'>Pods</p>
                            <p className="text-gray-400 font-[400]  text-[0.8rem]">FEB - SEPT 2025</p>
            </div>
             <p className="text-gray-700 mb-5">
               At Pods, I led the redesign of the Pods Creators platform, improving usability and creator experience for publishing podcast episodes on the Base network.
            </p>
            <ul className='px-7 text-gray-700  list-disc '>
                <li>This redesign contributed to 100+ episodes being published monthly.</li>
                <li>I also worked on the creator earnings feature to help track revenue in real-time.</li>
                <li>I led the design of the homepage for collectors, enabling podcast episodes to be minted as NFTs — which helped drive over $100,000 in volume for creators within three months.</li>
             
            </ul>
            <div className="breakthorough my-5 flex justify-between items-center text-[1.2rem] mt-15">
                            <p className='font-[600]'>Jamit</p>
                            <p className="text-gray-400 font-[400] text-[0.8rem]">OCT 2022 - JAN 2025</p>
            </div>
             <p className="text-gray-700 mb-5">
                I joined Jamit as a founding designer, starting as a Product Design Intern and growing into a Product Designer role.
            </p>
            <ul className='px-7 text-gray-700  list-disc '>
                <li>I led the design of the mobile application that allows creators to publish podcast episodes on Lisk and Base networks.</li>
                <li>I designed the feature on the website that enables publishing on Base, Lisk, and Sonelum, helping generate over $5,000 in revenue.</li>
                <li>I redesigned the Virtual Studio to enhance user experience and streamline key actions such as downloading recording sessions and inviting collaborators.</li>
                <li>I also led the design for the "Hear My Voice" Podcast Storytelling Contest website, sponsored by Focusrite.</li>
             
            </ul>
        </div>
      </div>
      
      <div className="about flex flex-wrap justify-between mt-15 mb-16">
        <h2 className="title uppercase font-semibold my-10 lg:my-0  text-[1rem] tracking-[0.155rem]] ">Project</h2>
        <div className="info w-full lg:w-[62%] md:w-[62%]">

            <div className="breakthorough my-5 flex justify-between items-center text-[1.2rem]">
                <p className='font-[600]'>Odernow</p>
                <p className="text-gray-400 text-lg font-[400] text-[0.8rem]">2023</p>
            </div>
            <p className="font-[600] py-3 text-gray-400">Product Designer & Project Lead </p>
            <p className="text-gray-700 mb-5">
               Odernow is an on-demand grocery delivery service that lets people shop for products from their favorite local stores and get it delivered within an hour.
            </p>
            <ul className='px-7 text-gray-700  list-disc '>
                <li>Led the product design for the platform, from concept to launch.</li>
                <li>Conducted user research to understand buyer and delivery workflows.
</li>
                <li>Onboarded 10 delivery riders, helping kickstart the logistics side of the service.</li>
             
            </ul>
        </div>
      </div>
       
        </section>
      
      <Footer/>
    </div>
  )
}

export default About
