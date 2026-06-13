
import {Link} from "react-router-dom"
import SideBar from "./SideBar.tsx"
import { Menu } from 'lucide-react'
function Header() {
  return (
    <header className='flex justify-between items-center py-7 sticky top-0 left-0 px-10 text-[14px]  border-b-1 font-bold backdrop-blur-[10px]  z-[99]' >
        <Link to='/'>SAMSON OLUMOYE</Link>
        <SideBar className='z-9999'>
            <span className='lg:hidden'><Menu/></span>
        </SideBar>
        <nav className='gap-6 items-center justify-center hidden lg:flex'>
            <Link to='/about' className="transition duration-300 ease  text-gray-800 hover:text-black">ABOUT</Link>
            <Link to='https://drive.google.com/file/d/1Yy_iFZkOOmJEcNg5mecBQ1HUkWKT-mxQ/view?usp=sharing' className="transition duration-300 ease  text-gray-800 hover:text-black">RESUME</Link>
            <Link to='https://www.linkedin.com/in/olumoye/' className="transition duration-300 ease  text-gray-800 hover:text-black">LINKEDIN</Link>
            <Link to='mailto:olumoyesamson@gmail.com' className="transition duration-300 ease  text-gray-800 hover:text-black">EMAIL</Link>

        </nav>
    </header>
  )
}

export default Header
