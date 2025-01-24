

import { categories } from '../assets'

const Catogeries = () => {
  return (
    <>
         <div className="flex justify-between gap-7 py-9 px-16">
  {categories.map((category, index) => (
    <div
      key={index}
      className="relative w-1/5 bg-white rounded-lg overflow-hidden cursor-pointer shadow-md transition-transform transform hover:scale-105"
    >
      <img
        src={category.imgSrc}
        alt={category.label}
        className="w-full h-32 object-cover cursor-pointer"
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        <h2 className="text-lg font-semibold text-white cursor-pointer">{category.label}</h2>
      </div>
    </div>
  ))}
</div>




    </>
  )
}

export default Catogeries