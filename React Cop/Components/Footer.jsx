


import { useNavigate } from "react-router-dom";
import {Images} from   "../assets"
import { footerData } from '../assets';


const Footer = () => {
  let nevigate = useNavigate()
    return (
      
      <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <img  onClick={()=> nevigate("/") }  src={Images.logo} alt="Claue Logo" className="mb-6 cursor-pointer" />
            {footerData[0].content.map((item, idx) => {
              if (item.type === "text") { 
                return (
                  <p key={idx} className="mb-2 text-gray-600">
                    {item.value}
                  </p>
                );
              }
              if (item.type === "links") {
                return (
                  <div key={idx} className="flex space-x-4">
                    {item.value.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>

          {footerData.slice(1).map((section, index) => (
            <div key={index} className="w-full md:w-1/5 mb-8 md:mb-0">
              <h3 className="font-bold mb-6 text-gray-800">{section.title}</h3>
              <ul className="space-y-2">
                {section.content.map((item, idx) => {
                  if (item.type === "text") {
                    return (
                      <p key={idx} className="text-gray-600">
                        {item.value}
                      </p>
                    );
                  }
                  if (item.type === "link") {
                    return (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }
                  if (item.type === "form") {
                    return (
                      <div key={idx}>
                        <div className="flex items-center rounded-lg overflow-hidden border border-gray-300">
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 text-sm border-none outline-none"
                          />
                        </div>
                        <button className="bg-black text-white px-5 py-3 rounded-lg mt-3 text-sm font-semibold hover:bg-gray-800">
                          Subscribe
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">
          &copy; 2025 Copyright By EbadBaloch.
        </div>
      </div>
    </footer>
      );
    };


    
export default Footer