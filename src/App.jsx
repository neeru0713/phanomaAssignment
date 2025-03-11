import React, { useState } from "react";
import "./App.css";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

function App() {
  return (
    <div className="flex p-4 flex-col">
      <header className="header flex">
        <div className="flex p-4 gap-2 items-center">
          <div className="text-7xl text-purple-400 mt-2">
            {" "}
            <HiOutlineColorSwatch />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#6c5fd4] text-2xl">Phanom</h1>
            <h1 className="text-[#bb31d9] text-2xl">Professionals</h1>
            <p className="text-purple-900 text-sm">INNOVATE CREATE DOMINATE</p>
          </div>
        </div>
        <div className="flex ml-[20%] gap-10">
          <div className="flex gap-6  items-center">
            <div className="flex gap-2">
              <p>Service</p>
              <BsChevronDown />
            </div>
            <div className="flex gap-2">
              <p>Hire Indian Telant</p>
              <BsChevronDown />
            </div>
            <p>Our Portfolio</p>
            <p>Case Study</p>

            <div className="flex gap-10">
              <button className="text-white rounded-3xl bg-[#6c5fd4] p-3">
                Book an Appointment
              </button>
              <div className="rounded-full bg-[#cd7df1] h-[40px] w-[40px]"></div>
            </div>
          </div>
        </div>
      </header>
      <section className="section m-[6%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <div className="text-[#4D95E1] font-bold text-4xl">
                Let's{" "}
                <span className="text-[#BD2CE8] font-bold text-4xl">
                  innovation{" "}
                </span>
                <span className="text-black"> meets your </span>
              </div>
              <h1 className="text-black text-4xl font-bold">exellnce</h1>
            </div>
            <div className="flex flex-col text-black text-xl">
              <p>Excellence refined, innovation igited, the future</p>
              <p>starts here</p>
            </div>
            <button className="text-white rounded-3xl bg-[#6c5fd4] w-[200px] p-3">
              Book an Appointment
            </button>
          </div>
          {/* <img
          src="https://via.placeholder.com/500"
          alt="Innovation"
          className="w-full max-w-[500px] mt-4 rounded-lg shadow-lg"
        /> */}
          <div className="flex font-bold gap-6 p-[200px]">
            <div className="flex flex-col text-center">
              <h1 className="text-4xl">24/7</h1>
              <p className="font-semibold">Online Support</p>
            </div>

            <div className="border-l border-black h-12"></div>

            <div className="flex flex-col text-center">
              <h1 className="text-4xl">100+</h1>
              <p className="font-semibold">Web Developed & Application</p>
            </div>

            <div className="border-l border-black h-12"></div>

            <div className="flex flex-col text-center">
              <h1 className="text-4xl">5+</h1>
              <p className="font-semibold">Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
