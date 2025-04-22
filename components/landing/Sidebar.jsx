import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className=" flex flex-col col-span-1 px-2">
          <div className="  flex justify-between items-center gap-3  p-3 text-xl">
            <div className="cursor-pointer flex justify-center text-2xl">
              <GiHamburgerMenu />
            </div>
            <div className="cursor-pointer hover:text-gray-300 font-mono">Home</div>
            <div className="cursor-pointer hover:text-gray-300 font-mono">Collections</div>
            <div className="cursor-pointer hover:text-gray-300 font-mono">New</div>
          </div>
          <div className=" flex flex-col gap-4 justify-end h-1/3">
            <div className=" flex flex-col gap-2  text-lg font-semibold">
              <div className="px-2 cursor-pointer hover:text-gray-300 font-sans">Men</div>
              <div className="px-2 cursor-pointer hover:text-gray-300 font-sans">Women</div>
              <div className="px-2 cursor-pointer hover:text-gray-300 font-sans">Kids</div>
            </div>
            <div className="bg-[#D9D9D9] w-full h-[40px] flex justify-between items-center">
              <div className=" text-xl font-bold p-2">
                <CiSearch />
              </div>
              <input
                type="search"
                name=""
                id=""
                className=" w-full h-full outline-none border-none"
              />
              <div className=" text-sm p-2">Search</div>
            </div>
          </div>

          <div className=" h-3/5 flex flex-col gap-1 justify-center items-start">
            <div className=" text-4xl font-serif font-bold flex flex-col ">
              <p>New</p>
              <p>Collection</p>
            </div>
            <div className=" text-base font-sans font-normal flex flex-col">
              <p>Summer</p>
              <p>2025</p>
            </div>
          </div>

          <div className=" flex justify-between items-end  h-1/9">
            <div className=" flex w-2/3 justify-between items-center bg-[#D9D9D9] p-3 h-fit">
              <div>Go To Shop</div>
              <div className=" text-xl">
                <FaArrowRightLong />
              </div>
            </div>
            <div className=" flex gap-3 items-center ">
              <div className=" p-3 border border-[#A3A3A3]"><FaAngleLeft />  </div>
              <div className=" p-3 border border-[#A3A3A3]"><FaAngleRight /></div>
            </div>
          </div>
        </div>
  )
}
