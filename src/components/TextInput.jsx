import { VscSend } from "react-icons/vsc";
import { GrAttachment } from "react-icons/gr";

function Input() {
  return (
    <>
      <div className="input">
        <section>
          <div className="bg-white w-[95%] left-2 p-4 absolute bottom-2 rounded-full">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="pl-4"
                placeholder="Reply to @Rohit Yadav"
              />
              <div className="flex items-center gap-3">
                <button><GrAttachment className="text-black text-2xl" /></button>
                <button><VscSend className="text-black text-2xl" /></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Input;
