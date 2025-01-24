import { useLocation } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import Icons from '../Components/Icons';
import Navbar2 from '../Components/Navbar2';

const ProductDetailPage = () => {
  const location = useLocation();
  const { product } = location.state; 

  return (

<>
<Navbar2 />

    <div className="flex flex-row p-9 ">
      <div className="w-full md:w-[410px]">
        <img src={product.img} alt={product.name} className="w-full h-auto object-cover" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4  md:gap-6 p-4 md:p-6 ">
        <div className="mb-1-">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl text-gray-600 mt-4">{product.price}</p>

          <div className="p-4 mt-5">
  <ul className=" pl-13-">
    <li className="font-semibold text-base text-gray-800 ">Women Clock Features</li>
    <ul className="list-disc pl-5 text-sm text-gray-500 ">
      <li>Elegant Design</li>
      <li>Lightweight</li>
      <li>Waterproof</li>
      <li>Multiple Color Options</li>
    </ul>
  </ul>
</div>


          
        </div>
        

        <p className="text-lg text-gray-500 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded-lg transition">
            ADD TO CART
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-600 py-2 px-6 rounded-lg transition flex items-center justify-center">
            <FiHeart />
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Availability: <span className="text-green-600">In stock</span>
          </p>
        </div>
      </div>
    </div>

    <div className="p-9 mt-4">
  <div className="flex justify-center items-center flex-col">
    {/* Tabs Section */}
    <div className="flex items-center  pb-2 mb-4">
      <button className="text-black font-semibold border-2 border-black rounded-full px-4 py-1 mr-4">
        Details
      </button>
      <button className="text-gray-600 hover:text-black transition-all px-4 py-1">
        More Information
      </button>
      <button className="text-gray-600 hover:text-black transition-all px-4 py-1">
        Custom tab
      </button>
      <button className="text-gray-600 hover:text-black transition-all px-4 py-1">
        Reviews
      </button>
    </div>

    <div className="text-gray-700 space-y-4">
      <p>
        Go sporty this summer with this vintage navy and white striped v-neck
        t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim
        and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model
        shown is a UK 8 and 55.
      </p>
      <p>
        Typography is the work of typesetters, compositors, typographers,
        graphic designers, art directors, manga artists, comic book artists,
        graffiti artists, and now—anyone who arranges words, letters, numbers,
        and symbols for publication, display, or distribution—from clerical
        workers and newsletter writers to anyone self-publishing materials.
      </p>
    </div>
  </div>
</div>

    <Icons/>

    

</>



  );
};

export default ProductDetailPage;
