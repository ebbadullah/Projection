import { features } from "../assets";
let Icons = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-8 px-12 py-16 bg-white">
  {features.map((feature) => {
    const Icon = feature.icon; 
    return (
      <div
        key={feature.id}
        className="flex items-center gap-4 flex-1 min-w-[250px] max-w-[350px] px-4"
      >
        <div className="flex-shrink-0">
          <Icon size={45} className="text-black" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-gray-800">
            {feature.title} 
          </h3>
          <p className="text-sm text-gray-600">
            {feature.description}
          </p>
        </div>
      </div>
    );
  })}
</div>



  );
};

export default Icons;
