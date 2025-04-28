import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong, FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Main() {
  return (
    <div className="h-screen">
      <div className="flex flex-col text-base gap-1 pb-5">
        <h1>MEN</h1>
        <h1>WOMEN</h1>
        <h1>KIDS</h1>
      </div>

      <div className="bg-[#D9D9D9] w-[30%]  flex justify-between items-center">
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

      <div className="flex  pt-18 gap-24 w-full">
        <div className=" flex flex-col justify-between w-[30%]">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-6xl font-semibold">
              New <br /> Collection
            </h1>
            <h1 className="text-base">
              Summer <br /> 2024
            </h1>
          </div>

          <div className="flex  items-center gap-4 ">
            <div className="flex  w-full justify-between items-center bg-[#D9D9D9] p-3">
              <div>Go To Shop</div>
              <div className="text-xl ">
                <FaArrowRightLong />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="p-3 border border-[#A3A3A3]">
                <FaAngleLeft />
              </div>
              <div className="p-3 border border-[#A3A3A3]">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-end w-[60%]">
          <div className="flex gap-10">
            <img
              src="./faceless-img.png"
              alt="Faceless"
              className=" object-cover"
            />
            <img
              src="./landing-img.png"
              alt="Landing"
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
