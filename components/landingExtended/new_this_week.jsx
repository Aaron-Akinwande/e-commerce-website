import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const cards = [
  {
    title: "V-Neck T-Shirt",
    description: "Embroidered Seersucker Shirt",
    image: "/product image 1.jpg",
    price: "$99",
  },

  {
    title: "Henley T-Shirt",
    description: "Blurred Print T-Shirt",
    image: "product image 3.png",
    price: "$99",
  },
  {
    title: "Crewneck T-Shirt",
    description: "Full Sleeve Zipper",
    image: "product image 4.png",
    price: "$99",
  },
  {
    title: "Cotton T Shirt",
    description: "Basic Slim Fit T-Shirt",
    image: "/product image 5.png",
    price: "$99",
  },
  {
    title: "V-Neck T-Shirt",
    description: "Embroidered Seersucker Shirt",
    image: "/product image 1.jpg",
    price: "$99",
  },

  {
    title: "Henley T-Shirt",
    description: "Blurred Print T-Shirt",
    image: "product image 3.png",
    price: "$99",
  },
  {
    title: "Crewneck T-Shirt",
    description: "Full Sleeve Zipper",
    image: "product image 4.png",
    price: "$99",
  },
  {
    title: "Cotton T Shirt",
    description: "Basic Slim Fit T-Shirt",
    image: "/product image 5.png",
    price: "$99",
  },
];

export default function Main_extended() {
  return (
    <div>
      <div className="py-8 flex">
        <h1 className="font-serif text-6xl font-semibold">
          New <br /> This week
        </h1>
        <h5 className="text-[#000E8A] text-xl font-bold mt-15">(50)</h5>
      </div>

      <div className="flex gap-10 overflow-x-auto scrollbar-hidden">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-3 flex-shrink-0">
            <img
              src={card.image}
              alt={card.title}
              className="h-78 w-76 border border-gray-200 shadow "
            />

            <h1 className=" text-xs text-[#000000A8] font-medium">
              {card.title}
            </h1>
            <div className=" flex  justify-between text-black text-sm font-medium ">
              <h1>{card.description}</h1>
              <h2>{card.price}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex gap-3 items-center justify-center w-full pt-5">
        <div className=" p-3 border border-[#A3A3A3]">
          <FaAngleLeft />{" "}
        </div>
        <div className=" p-3 border border-[#A3A3A3]">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
