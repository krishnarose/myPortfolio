import React from "react";
import { IoLocation } from "react-icons/io5";

const Internship = () => {
  return (
    <>
      <div
        name="Internship"
        className="flex items-center justify-center "
      >
        <h1 className=" md:text-2xl font-bold hover:underline text-rose-500 cursor-pointer lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Internships
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center py-12 gap-5">
        <div className="h-[200px] w-[90%] md:w-[400px] overflow-hidden border-1 shadow-xl">
          <div className="h-full w-full rounded-xl cursor-pointer transition duration-500 ease-in-out hover:scale-110 p-5">
            <p className="text-2xl font-bold text-blue-500">INFONSL SECUNET PVT.LTD</p>
            <p className="mt-2">IT Services and It Consulting</p>
            <div className="flex items-center mt-2">
              <IoLocation className="text-red-500 text-2xl" />
              <p className="ml-2">Lalpur Chowk, Ranchi</p>
            </div>
            <p className="font-bold mt-2">Duration: 180 days</p>
          </div>
        </div>
        <div className="h-[200px] w-[90%] md:w-[400px] overflow-hidden border-1 shadow-xl">
          <div className="h-full w-full rounded-xl cursor-pointer transition duration-500 ease-in-out hover:scale-110 p-5">
            <p className="text-2xl font-bold text-blue-500 text-center">Cognizance</p>
            <p className="font-bold mt-2 text-center">Duration: 45 days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
