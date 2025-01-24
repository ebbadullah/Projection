import React from 'react';
import { InfoData, ProductData1 } from '../assets';

let Card = () => {
  return (
    <>
      <div className="w-full px-8 md:px-16 lg:px-22 h-auto my-12 flex gap-6">
        {/* InfoCard */}
        <div className="w-1/4 relative">
          <img
            src={InfoData[0].img}
            alt=""
            className="w-full h-[390px] object-cover"
          />
          {/* Text Overlay (Always Visible) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h2 className="text-[18px] font-bold text-black">
              VIEW COLLECTIONS
            </h2>
            <h1 className="text-3xl font-bold text-BLACK">LOOKBOOK</h1>
            <p className="text-black">your world of fashion in numbers</p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="w-3/4 flex gap-9">
          {ProductData1.slice(0, 4).map((items, index) => (
            <div key={index} className="w-[22%]">
              
              <img
                src={items.img}
                alt=""
                className="w-full h-[290px] object-cover"
              />
              <h1 className="font-medium text-[18px] text-gray-700 mt-2">
                {items.name}
              </h1>
              <p className="text-[16px] text-gray-500">{items.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
