import { LuRocket } from "react-icons/lu";
import "./App.css";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormViewHide } from "react-icons/gr";
import { IoIosEye } from "react-icons/io";

function App() {
  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-col bg-[#030812] w-full h-full text-white px-56 py-5">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center h-[100px]">
          <button className="flex flex-row justify-start items-center gap-4">
            <div>
              <img src="/logo.svg" className="w-[47px] h-[51px] object-cover" />
            </div>
            <p className="text-[32px] font-bold">JumpStart</p>
          </button>

          <div className="flex flex-row justify-center items-center gap-14">
            <button className="text-16 font-bold">Home</button>
            <button className="text-16 font-bold">Explore</button>
            <button className="text-16 font-bold">About us</button>
            <button className="text-16 font-bold">Contact us</button>
          </div>

          <div className="flex flex-row justify-center items-center gap-10">
            <button className="text-16 font-bold">Log in</button>
            <button className="text-16 font-bold w-[103px] h-[43px] rounded-[12px] bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68]">
              <p>Sign up</p>
            </button>
          </div>
        </div>

        {/*Homepage*/}
        <div className="flex justify-between items-center w-full h-full">
          {/*Column 1*/}
          <div className="flex flex-col justify-center items-start w-1/2 h-full">
            <p className="text-[48px] font-bold">Want to manage your</p>
            <div className="flex flex-col text-[80px] font-bold bg-gradient-to-b from-[#FDAE8F] to-[#FD1C68] bg-clip-text text-transparent mt-[-20px]">
              <p>Commissions?</p>
              <img
                src="/images/line.svg"
                className=" w-[500px] bg-cover mt-[-10px]"
              />
            </div>

            <div className="flex flex-col items-start text-[20px] font-normal pt-10 pb-10">
              <p>
                Take control of your commissions with ease.
              </p>
              <p>Let's track it together!</p>
            </div>

            <div className="flex flex-row gap-4 text-[20px] font-bold pt-6">
              <div className="flex flex-row items-center justify-center gap-3 bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-[216px] h-[59px] rounded-[16px]">
                <LuRocket className="text-[24px]" />
                <button>Let's go!</button>
              </div>
              <div className="flex flex-row justify-center items-center gap-3 border-2 w-[216px] h-[59px] rounded-[16px]">
                <IoIosEye className="text-[24px]" />
                <button>View Demo</button>
              </div>
            </div>
          </div>

          {/*Column 2*/}
          <div>
            <img
              src="/images/startup.png"
              className="w-[737px] h-[627px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
