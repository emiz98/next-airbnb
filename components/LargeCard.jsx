import React from "react";

const LargeCard = ({ title, img }) => {
  return (
    <div className="cursor-pointer mb-5 hover:scale-105 transition ease- p-2">
      <img className="rounded-lg w-full object-contain" src={img} alt="" />
      <h3 className="font-medium text-base md:text-xl mt-1 md:mt-3">{title}</h3>
    </div>
  );
};

export default LargeCard;
