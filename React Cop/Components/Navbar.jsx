
import { Link } from 'react-router-dom'
import React from 'react';
import { FaUserLarge } from "react-icons/fa6";
import { navbar } from '../assets'
import { useUser,useClerk, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  // let  [open, SetOpen] = React.useState(false)
  let {openSignIn} = useClerk()
  let {user}  = useUser()

  return (
    <>
    <nav className="flex justify-between items-center   py-6 px-[120px] bg-gray-200">
  <div className="flex space-x-6">
    <ul className='flex  gap-7'>
    {
  navbar.map((item, index) => (
    <li
      className={`font-mdlight ${
        item.lable === "BuyNow" ? "text-red-500 font-bold" : "text-black"
      }`}
      key={index}
    >
      <Link to={item.path}>{item.lable}</Link>
    </li>
  ))
}

    </ul>
    
  </div>
{
  user ? (
<div className='flex gap-2  items-center'>
  <UserButton   />
  <p className='font-semibold uppercase cursor-pointer'>{user.fullName}</p>
</div>
  ):(
    <div className="flex justify-between p-4  items-center gap-3  ">
    <FaUserLarge  onClick={openSignIn} className='cursor-pointer'   size={20} />
    <span className='cursor-pointer  text-md text-black'  onClick={openSignIn} >Login</span>
  </div>
  )
}


 

 
</nav>

    </>
  )
}

export default Navbar