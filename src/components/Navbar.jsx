import { IoMdArrowRoundBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { GoReport } from "react-icons/go";

import { BiSolidEdit } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import profile from "../images/Profile.png";
import { useState } from "react";

function Navbar(props) {
  const[show, setShow] = useState(false)

  return (
    <>
      <div className="navbar border border-b-2 z-50 drop-shadow-xl flex flex-col justify-between px-4 pt-5">
        <section className="flex justify-between items-center">
          <div className="left flex items-center gap-4">
            <button className="back">
              <IoMdArrowRoundBack className="text-4xl" />
            </button>
            <span className="text-3xl">{props.name}</span>
          </div>
          <div className="edit">
            <BiSolidEdit className="text-4xl" />
          </div>
        </section>
        <section className="profile flex justify-between items-center z-20">
          <div className="flex items-center">
            <img src={profile} className="w-[50px] my-5 mr-2" alt="" />
            <div className="flex flex-col ">
              <span>
                From <span className="font-bold">{props.from}</span>
              </span>
              <span>
                To <span className="font-bold">{props.to}</span>
              </span>
            </div>
          </div>
          <span>
            <SlOptionsVertical onClick={() => setShow(!show)} className="text-2xl" />
          </span>
     {
      show ?      <div className="option absolute right-3 top-[120px] bg-white drop-shadow-xl  rounded-xl">
      <span className="border-b flex items-center p-4"><PiUsers className="mr-2"/> Members</span>
      <span className="border-b flex items-center p-4"><CiPhone className="mr-2"/> Share Number</span>
      <span className="border-b flex items-center p-4"><GoReport className="mr-2"/> Report</span>
    
    </div>
    : null
     }
        </section>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
