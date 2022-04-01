import React from "react";

const SingleCard = ({ img, title, description, text }) => {
  return (
    <section className="relative pb-10 cursor-pointer">
      <div className="relative">
        <img
          className="rounded-lg h-60 md:h-80 w-full object-cover object-bottom"
          src={img}
          alt="hero2"
        />
      </div>
      <div className="absolute top-[15%] md:top-[20%] left-5 md:left-12 space-y-4 w-52">
        <h3 className="font-medium text-2xl md:text-4xl">{title}</h3>
        <p>{description}</p>
        <button
          className="text-sm text-white bg-black
        px-4 py-2 rounded-lg hover:bg-gray-800 transition ease-in-out"
        >
          {text}
        </button>
      </div>
    </section>
  );
};

export default SingleCard;
