import React from 'react'

const ShopCard = () => {
  return (
    <section
      className="relative flex cursor-pointer items-center rounded-xl p-4 pb-10 transition 
    ease-out hover:bg-gray-50 hover:shadow-lg"
    >
      <div className="md:2/5 z-50 mr-5 w-4/5 space-y-4">
        <h3 className="text-2xl font-medium md:text-4xl lg:text-5xl">
          Shop Airbnb gift cards
        </h3>
        <button
          className="mt-5 rounded-lg bg-black px-4
    py-2 text-sm text-white transition ease-in-out hover:bg-red-400"
        >
          Learn more
        </button>
      </div>
      <img
        className="absolute right-0 w-3/5 object-contain opacity-80 md:relative md:opacity-100"
        src="/assets/shopcard.png"
        alt="shop"
      />
    </section>
  )
}

export default ShopCard
