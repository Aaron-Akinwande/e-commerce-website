import Main from "../components/landing/Main";
import Sidebar from "../components/landing/Sidebar";

import React from "react";

export default function index() {
  return (
    <div>
      <div className=" w-full h-screen grid grid-cols-3  bg-gray-200">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
