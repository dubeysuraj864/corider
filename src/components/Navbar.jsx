import { IoMdArrowRoundBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

import { BiSolidEdit } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import profile from "../images/Profile.png";

function Navbar(props) {
  return (
    <>
      <div className="navbar border border-b-2 flex flex-col justify-between px-4 pt-5">
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
        <section className="profile flex justify-between items-center">
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
            <SlOptionsVertical className="text-2xl" />
          </span>
        </section>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
