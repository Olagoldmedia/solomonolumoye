
import {Link} from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
} from "./components/ui/sheet"

export default function SideBar({ children , className}: { children: React.ReactNode, className : string }) {
  return (
   
    <Sheet >
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="z-[9999]">
        
        <SheetHeader className={className} >
          <h2 className=" text-center p-7"><Link to='./App.tsx'>SAMSON OLUMOYE</Link></h2>
          <SheetDescription>
           <nav className='p-4 items-center text-black justify-center  flex-col gap-5'>
            <p className="mb-4"><Link to='/about' target="_blank" className="transition duration-300 ease  text-gray-800 hover:text-black">ABOUT</Link></p>
            <p className="mb-4"><Link to='https://drive.google.com/file/d/1Yy_iFZkOOmJEcNg5mecBQ1HUkWKT-mxQ/view?usp=sharing' className="transition duration-300 ease  text-gray-800 hover:text-black" >RESUME</Link></p>
            <p className="mb-4"><Link to='https://www.linkedin.com/in/olumoye/' className="transition duration-300 ease  text-gray-800 hover:text-black">LINKEDIN</Link></p>
            <p className="mb-4"><Link to='mailto:olumoyesamson@gmail.com' className="transition duration-300 ease  text-gray-800 hover:text-black">EMAIL</Link></p>

        </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
