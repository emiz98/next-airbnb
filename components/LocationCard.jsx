import { FavoriteBorder, Star } from '@mui/icons-material'
import React from 'react'

const LocationCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div
      className="group group flex flex-col rounded-lg border-b py-7 px-2 transition duration-200 ease-out 
    first:border-t md:flex-row md:hover:shadow-lg"
    >
      <div
        className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-lg 
        md:h-24 md:min-h-[13rem] md:w-40 md:min-w-[20rem]"
      >
        <img
          className="absolute h-full w-full transform cursor-pointer bg-cover bg-center object-cover transition-all 
          duration-300 ease-in-out group-hover:scale-110"
          src={img}
          alt="location"
        />
      </div>

      <div className="mt-4 flex flex-grow flex-col md:mt-0 md:px-5">
        <div className="flex items-center justify-between">
          <span className="text-base text-gray-600">{location}</span>
          <FavoriteBorder className="h-7 cursor-pointer hover:text-red-500" />
        </div>
        <h4 className="w-4/5 cursor-pointer text-2xl font-normal md:hover:underline lg:w-full">
          {title}
        </h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between">
          <div className="flex items-center space-x-2">
            <Star className="text-lg text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">{star}</span>
          </div>
          <div className="mt-5 flex flex-col items-end md:mt-0">
            <span className="pb-2 text-xl font-medium lg:text-2xl">
              {price}
            </span>
            <span className="text-sm text-gray-500">{total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
