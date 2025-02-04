import React from "react";
import { FaHamburger } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className="grid xl-grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-900">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* logo burger */}
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-300" />

                {/* search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className=" rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder=" Search for your favorite burgers from menu"
                  />

                  <IoSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md-block" />
                </div>
              </div>

            <div className="flex justify-center items-center gap-2">

            <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block"/>
            <p className="text-sm text-white hidden lg:block md:block"> Order now and get it with
              <span className="text-amber-400"> 15 Minutes!</span>
            </p>
            
          {/* cart icon */}
            <FaCartShopping className="w-8 h-8 text-sky-400 rounded-full ring-2 p-2 relative hover:text-amber-400"/>
            <Image
            className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400"src="/user.jpg"
            alt="user avtar"
            width={32}
            height={32}
            />
            </div>





            </div>
          </div>
        </div>
      </div>
    </div>





  );
  
};


export default Navbar;
