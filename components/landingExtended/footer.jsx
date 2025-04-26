import React from "react";

export default function footer() {
  return (
    <div>
      <div className=" bg-[#e9e9e9] grid grid-cols-3 pt-28 px-40">
        <div className=" flex flex-col gap-16 opacity-60">
          <div className=" flex flex-col gap-8 text-xs">
            <h1 className=" text-[10px]">Info</h1>
            <div>
              <h6>Pricing</h6>
              <h6>About</h6>
              <h6>Contacts</h6>
            </div>
          </div>

          <div className=" flex flex-col gap-8 text-xs">
            <h1 className=" text-[10px]">Languages</h1>
            <div>
              <h6>Eng</h6>
              <h6>Sve</h6>
              <h6>Esp</h6>
            </div>
          </div>
        </div>

        <div>
            <img src="/footer.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
