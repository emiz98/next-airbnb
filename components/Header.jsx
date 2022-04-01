import React from "react";
import { Language, Menu, Search } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-3 md:p-5 md:px-10 sticky top-0 z-50 flex justify-between items-center">
      <img
        className="w-28 md:w-32 object-contain cursor-pointer"
        src="/logo.png"
        alt="logo"
      />
      <div className="hidden md:flex lg:flex-grow max-w-2xl rounded-full items-center md:shadow-sm md:border-2 py-2">
        <input
          className="pl-5 bg-transparent text-gray-600 md:mr-2 outline-none flex-grow"
          type="text"
          placeholder="Start your search"
        />
        <span className="hidden md:flex cursor-pointer md:mr-2 items-center rounded-full p-2 bg-red-400">
          <Search className=" text-white" />
        </span>
      </div>
      <div className="flex items-center space-x-5 font-medium text-gray-500">
        <span className="hidden md:inline-flex cursor-pointer hover:underline">
          Become a host
        </span>
        <Language className="hidden md:inline-flex" />
        <div
          className="flex items-center space-x-3 border md:border-2 border-gray-300
        shadow-sm p-1 md:p-2 rounded-full"
        >
          <Menu className="ml-2 ease-out cursor-pointer hover:scale-110 transition" />
          <img
            className="w-10 cursor-pointer hover:scale-105 transition ease-out rounded-full"
            src="/avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
