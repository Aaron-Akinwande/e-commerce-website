import React from "react";

export default function Our_approach() {
  return (
    <div>
      <div className=" flex flex-col gap-5 justify-center items-center">
        <h1 className=" text-5xl  ">Our Approach to fashion design</h1>
        <h6 className=" text-base font-light  text-center ">
          at elegant vogue , we blend creativity with craftsmanship to create{" "}
          <br /> fashion that transcends trends and stands the test of time each{" "}
          <br /> design is meticulously crafted, ensuring the highest quelity{" "}
          <br /> exqulsite finish
        </h6>
      </div>

      <div className="flex gap-6 pt-20">
        <div className="">
          <img src="/image 20.png" alt="" className=" object-cover h-[419px]" />
        </div>

        <div className="">
          <img
            src="/image 21.png"
            alt=""
            className=" object-cover h-[419px] mt-28"
          />
        </div>

        <div className="">
          <img
            src="/image 22.png"
            alt=""
            className=" object-cover h-[419px] bg-[#eeeeee]"
          />
        </div>

        <div className=" ">
          <img
            src="/image 23.png"
            alt=""
            className=" object-cover h-[419px] mt-28"
          />
        </div>
      </div>
    </div>
  );
}
