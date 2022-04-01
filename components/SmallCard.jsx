import React from 'react'

const SmallCard = ({ img, location, distance }) => {
  return (
    <div
      className="mt-5 flex cursor-pointer items-center space-x-4 
    rounded-lg transition duration-200
    ease-out hover:scale-105 hover:bg-gray-100"
    >
      <div>
        <img
          className="h-16 rounded-lg object-contain md:h-20"
          src={img}
          alt="card single"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{location}</h2>
        <h3 className="text-sm">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
