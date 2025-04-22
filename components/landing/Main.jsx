import React from 'react'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";


export default function Main() {
  return (
    <div className=" flex flex-col justify-between h-full w-full col-span-2 ">
    <div className=" grid grid-cols-2">
      <div className=" w-full flex justify-center text-5xl">
        <div className=" text-[#D9D9D9]">
          <AiOutlineCaretLeft />
        </div>
        <div className="">
          <AiOutlineCaretRight />
        </div>
      </div>
      <div className=" grid grid-cols-3 w-full">
        <div className=" w-fit h-fit cursor-pointer rounded-full text-2xl p-2 flex items-center bg-black text-white ">
          <FaRegHeart />
        </div>
        <div className=" flex ">
          <div className="h-fit w-fit p-2 px-3 text-lg rounded-2xl text-white bg-black">
            Cart
          </div>
          <div className="h-fit p-1 rounded-full bg-black flex items-center">
            <div className=" text-lg rounded-full bg-white p-2">
              <FaBagShopping />
            </div>
          </div>
        </div>
        <div>
          <div className="h-fit w-fit text-2xl text-white p-2 rounded-full bg-black flex items-center">
            <IoPersonOutline />
          </div>
        </div>
      </div>
    </div>

    <div className=" flex justify-evenly w-full  gap-4 ">
      <div>
        <img src="./faceless-img.png" alt="" />
      </div>
      <div>
      <img src="./landing-img.png" alt="" />

      </div>
    </div>
  </div>
  )
}
