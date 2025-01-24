

import {Images} from   "../assets"
import { FaRegUser,FaRegHeart,FaShoppingBasket   } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";


const Navbar2 = () => {
  let nevigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-16 py-4">
    <img     onClick={()=> nevigate("/") } src={Images.logo} alt="Logo" className='w-32  cursor-pointer ' />
    <div className="flex items-center space-x-4">
      <button className="text-black"><b>Call Us: +842437955813</b></button>
      <div className="flex items-center space-x-2">
        <button className="text-black"><FaRegUser className='size-5' /></button>
        <button className="text-black"><FaRegHeart className='size-5' /></button>
        <button className="text-black"><FaShoppingBasket className='size-5' /></button>
      </div>
    </div>
  </div>   
  )
}

export default Navbar2
