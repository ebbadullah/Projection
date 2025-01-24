import { ProductData1, ProductData2 } from '../assets';
import { Link } from 'react-router-dom'; 


const ProductPage = () => {
 
  return (
    <>
      <div className="w-full flex flex-row space-x-6 px-16 py-4 justify-between items-center">
        <div className="w-1/4">
          <h3 className="font-bold bg-cyan-500 text-white text-center py-4">DEPARTMENTS</h3>
        </div>
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="w-full px-7 py-4 border rounded-md text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="w-full flex space-x-6 px-8 py-6 ">
        <div className="w-1/4 shadow-lg">
          <h3 className="font-bold text-2xl text-center mb-4 text-[#222222]">Filter</h3>
          <div className="space-y-4 mt-14">
            <div className="border-2 rounded-md p-4 m-3">
              <h4 className="font-semibold ml-12 text-lg mt-5 text-[#222222]">Categories</h4>
              <div>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-6 text-[#222222]" />
                  Men
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Women
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Kids
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Baby
                </label>
              </div>
            </div>
            <div className="border-2 rounded-md p-4 m-3">
              <h4 className="font-semibold ml-12 text-lg mt-5 text-[#222222]">Types</h4>
              <div>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-6 text-[#222222]" />
                  T-shirts
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Jackets
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Shoes
                </label>
                <label className="block ml-12">
                  <input type="checkbox" className="mr-2 mt-3 text-[#222222]" />
                  Accessories
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 shadow-base">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-3xl text-[#222222]">Products</h3>
            <select className="border px-4 py-2 rounded-md text-sm">
              <option>Sort Prizes</option>
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
              <option>Newest</option>
            </select>
          </div>
           <div className="flex flex-wrap justify-between">
  {ProductData1.map((product, index) => (
    <Link
    onClick={()=>scrollTo(0,0)}

      to={`/productdetailpage/${index}`}
      state={{ product }}
      key={index}
      style={{ textDecoration: 'none' }}
    >
      <div className="product-card cursor-pointer flex-1 w-[215px] mb-6 p-4 ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[300px] object-cover"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-md font-medium mt-1">{product.price}</p>
      </div>
    </Link>
  ))}
</div>
     <div className="flex flex-wrap justify-between">
  {ProductData2.map((product, index) => (
    <Link
      to={`/productdetailpage/${index}`}
      onClick={()=>scrollTo(0,0)}
      state={{ product }}
      key={index}
      style={{ textDecoration: 'none' }}
    >
      <div className="product-card cursor-pointer flex-1 w-[215px] mb-6 p-4 ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[300px] object-cover"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-md font-medium mt-1">{product.price}</p>
      </div>
    </Link>
  ))}
</div>
        </div>
      </div>

    </>
  );
};

export default ProductPage;
