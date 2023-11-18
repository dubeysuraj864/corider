import { VscSend } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";
import { useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { FiFileText } from "react-icons/fi";
import { VscTriangleDown } from "react-icons/vsc";

function Input() {
  const [option, setOption] = useState(false);
  return (
    <>
      <div className="input">
        <section>
          <div className="bg-white drop-shadow-xl border w-[95%] left-2 p-4 absolute bottom-2 rounded-full">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="pl-4"
                placeholder="Reply to @Rohit Yadav"
              />
              <div className="flex items-center gap-3">
                {option ? (
                  <div className="option flex absolute drop-shadow-xl border  bg-green-700 p-4 rounded-full right-2 bottom-[60px] text-white text-2xl gap-3">
                    <span>
                      <VscTriangleDown className="text-green-700 absolute right-[50px] -bottom-[15px]" />
                    </span>
                    <span>
                      <MdOutlinePhotoCamera />
                    </span>
                    <span>
                      <HiOutlineVideoCamera />
                    </span>
                    <span>
                      <FiFileText />
                    </span>
                  </div>
                ) : null}
                <button onClick={() => setOption(!option)}>
                  <GrAttachment className="text-black text-2xl" />
                </button>
                <button>
                  <VscSend className="text-black text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Input;
