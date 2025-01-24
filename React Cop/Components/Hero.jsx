

import {Images} from   "../assets"
import { departments } from '../assets';


const Hero = () => {
    return (
      <div className="flex flex-col">

      {/* Logo and Contact Section */}
    
    
      {/* Main Content */}
      <div className="flex px-12 py-6">
    
        {/* Left Section: Departments */}
        <div className="w-1/4">
          <h3 className="font-bold bg-cyan-500 text-white text-center py-4">DEPARTMENTS</h3>
          <ul className="space-y-0 divide-y divide-gray-300">
            {departments.map((item, index) => (
              <li key={index} className="border py-2 px-4">
                {item.text}{" "}
                {item.badge && (
                  <span className={`${item.badgeColor} font-bold`}>{item.badge}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
    
        {/* Right Section */}
        <div className="w-3/4 flex flex-col space-y-6  pl-6">
    
          {/* Search Bar Section */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search entire store here..."
              className="w-full px-7 py-4 border rounded-md text-sm focus:outline-none"
            />
          </div>
    
          {/* Images Section */}
          <div className="flex space-x-6">


    
            {/* Big Image */}
            <div className="relative w-2/3">
              <img
                src={Images.banner1}
                alt="Banner 1"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-9 text-white">
                <h2 className="text-xl font-medium
                ">Beautiful 2023</h2> 
                <h1 className="text-4xl pt-3 font-bold">NEW ARRIVALS</h1>
                <button className="mt-4 border-2 border-white  text-white py-2 px-6 rounded-full duration-1000  hover:text-black hover:border-black">Discover now</button>
              </div>
            </div>
    
            {/* Small Image */}
            <div className="relative w-1/3">
              <img
                src={Images.banner2}
                alt="Banner 2"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded">
                <h3 className="text-sm font-medium">Top view in this week</h3>
                <h2 className="text-lg font-bold">TRENDING</h2>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    
    </div>
    



      );
    };





export default Hero