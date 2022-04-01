import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div
      className="flex items-center mt-5 space-x-4 md:mr-8 rounded-lg 
    cursor-pointer hover:bg-gray-100 hover:scale-105
    transition ease-out duration-200"
    >
      <div>
        <img
          className="h-16 md:h-20 object-contain rounded-lg"
          src={img}
          alt="card single"
        />
      </div>
      <div>
        <h2 className="font-semibold text-lg">{location}</h2>
        <h3 className="text-sm">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
