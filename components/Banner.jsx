import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[15rem] md:h-[25rem] object-cover object-bottom"
        src="/assets/hero.webp"
        alt=""
      />
      <div className="absolute top-1/3 w-full text-center">
        <p className="text-sm sm:text-lg font-medium">
          Not sure where to go? <span className="text-red-500">Perfect</span>
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md 
        rounded-full font-medium my-3 hover:shadow-lg active:scale-90 transition ease-in-out"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
