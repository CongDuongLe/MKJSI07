import React, {useEffect} from 'react'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

        



  return (
    // <div className='fixed h-[80px] w-full bg-[#002B5B] top-0 left-0 items-center content-center flex'>
    //   <div className=' flex flex-row items-center content-between '>

    //     <Link to ='/' >
    //          <div className='nav-style'>Sign Up</div>
    //     </Link>
    //     <Link to='login'>
    //          <div className='nav-style'>Sign In</div>
    //     </Link>
    //     <Link to='home'>
    //          <div className='nav-style'>Home</div>
    //     </Link>
    //     <Link to='pokemon'>
    //          <div className='nav-style'>Pokemon</div>
    //     </Link>

       
    

    //   </div>
    //   <Outlet />
    // </div>

    <div className="text-white hidden md:flex justify-center items-center">
    <ul className="flex flex-row space-x-4 justify-center items-center">
        <li className ='li-section'>
            {/* react router */}
            <Link to='/' smooth={true} duration={500} > Sign Up </Link>
         </li>
        <li className ='li-section'>   
              <Link to='login' smooth={true} duration={500} > Login </Link>
        </li>
        <li className ='li-section'>   
              <Link to='home' smooth={true} duration={500} > Home </Link>
        </li>
        <li className ='li-section'>   
              <Link to='pokemon' smooth={true} duration={500} > Skill </Link>
        </li>
    </ul>
</div>


  )
}

export default Navbar