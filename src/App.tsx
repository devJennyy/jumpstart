import { LuRocket } from "react-icons/lu";
import "./App.css";
import { IoIosEye } from "react-icons/io";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function App() {
  return (
    <>
      {/*══════════════════════════════════════════════════════════════════════════ 
                               W E B  C O N T A I N E R                                   
        ══════════════════════════════════════════════════════════════════════════*/}
      <div className="flex-col bg-[#030812] w-full text-white pt-5 md:flex hidden">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center h-[100px] w-full px-56 fixed top-0 bg-[#030812]/30 backdrop-blur-md z-50 ">
          <a
            href="#homepage"
            className="flex flex-row justify-start items-center gap-4"
          >
            <div>
              <img src="/logo.svg" className="w-[47px] h-[51px] object-cover" />
            </div>
            <p className="text-[32px] font-bold">JumpStart</p>
          </a>

          <div className="flex flex-row justify-center items-center gap-14 nav-container">
            <a href="#homepage" className="text-16 font-bold">
              Home
            </a>
            <a href="#explore" className="text-16 font-bold">
              Explore
            </a>
            <a href="#about-us" className="text-16 font-bold">
              About us
            </a>
            <a href="#contact-us" className="text-16 font-bold">
              Contact us
            </a>
          </div>

          <div className="flex flex-row justify-center items-center gap-10">
            <button className="text-16 font-bold active:scale-95 transition-all">
              Log in
            </button>
            <button className="flex justify-center items-center sign-up text-16 font-bold w-[103px] h-[43px] rounded-[12px] bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] active:scale-95 transition-all">
              <p>Sign up</p>
            </button>
          </div>
        </div>

        {/* Homepage */}
        <div
          id="homepage"
          className="flex justify-between items-center w-full h-[100vh] px-40"
        >
          {/*Column 1*/}
          <div className="flex flex-col justify-center items-start w-1/2 h-full ">
            <div className="pb-10 pl-4">
              <img src="/images/star-one.svg" />
            </div>

            <div className="flex flex-col items-start pl-16">
              <p className="text-[48px] font-bold">Want to manage your</p>
              <div className="flex flex-col items-start text-[80px] font-bold bg-gradient-to-b from-[#FDAE8F] to-[#FD1C68] bg-clip-text text-transparent mt-[-20px]">
                <p>Commissions?</p>
                <img
                  src="/images/line.svg"
                  className="w-[495px] bg-cover mt-[-10px] ml-1"
                />
              </div>
            </div>

            <div className="flex flex-col items-start text-[20px] font-normal pt-10 pb-5 pl-16">
              <p>Take control of your commissions with ease.</p>
              <p>Let's track it together!</p>
            </div>

            <div>
              <img src="/images/star-two.svg" />
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-row items-start gap-4 text-[20px] font-bold pt-6 pl-16">
                <button className="flex flex-row items-center justify-center gap-3 bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-[216px] h-[59px] rounded-[16px] active:scale-95 transition-all">
                  <LuRocket className="text-[24px]" />
                  <p>Get started</p>
                </button>
                <button className="flex flex-row justify-center items-center gap-3 border-2 w-[216px] h-[59px] rounded-[16px] active:scale-95 transition-all">
                  <IoIosEye className="text-[24px]" />
                  <p>View Demo</p>
                </button>
              </div>

              <img src="/images/star-three.svg" className="mt-5 ml-11" />
            </div>
          </div>

          {/*Column 2*/}
          <div>
            <img
              src="/images/startup.png"
              className="w-[737px] h-[627px] object-cover mr-8"
            />
          </div>
        </div>

        {/* Explore */}
        <div
          id="explore"
          className="flex flex-col h-[100vh] w-full px-56 pt-40"
        >
          <p className="text-[36px] font-bold mb-24">How it Works</p>

          <div className="flex flex-row justify-between items-center relative">
            <div className="flex flex-col gap-10">
              <img
                src="/images/demo-pic.png"
                className="w-[372px] h-[216px] hover:scale-110 z-50 transition-all cursor-pointer"
              />

              <div className="flex flex-col text-left gap-5">
                <div className="flex flex-row items-center gap-14">
                  <p className="text-[24px] font-bold">SAMPLE</p>
                  <div>
                    <img
                      src="/images/circle.png"
                      className="bg-cover w-[15px]"
                    />
                  </div>
                </div>
                <p className="text-[16px] font-medium w-[370px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim!
                </p>
              </div>
            </div>

            <img
              src="/images/dash-left.svg"
              className="absolute top-0 ml-[140px] w-[34%] h-[280px] mt-4"
            />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-row justify-center items-center gap-14">
                  <div>
                    <img
                      src="/images/circle.png"
                      className="bg-cover w-[15px]"
                    />
                  </div>
                  <p className="text-[24px] font-bold">SAMPLE</p>
                  <div>
                    <img
                      src="/images/circle.png"
                      className="bg-cover w-[15px]"
                    />
                  </div>
                </div>
                <p className="text-[16px] font-medium w-[370px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim!
                </p>
              </div>
              <img
                src="/images/demo-pic.png"
                className="w-[372px] h-[216px] hover:scale-110 z-50 transition-all cursor-pointer"
              />
            </div>

            <img
              src="/images/dash-right.svg"
              className="absolute top-0 ml-[805px] w-[34%] h-[280px] mt-4"
            />

            <div className="flex flex-col gap-10">
              <img
                src="/images/demo-pic.png"
                className="w-[372px] h-[216px] hover:scale-110 z-50 transition-all cursor-pointer"
              />
              <div className="flex flex-col items-end gap-5">
                <div className="flex flex-row items-center gap-10">
                  <div>
                    <img
                      src="/images/circle.png"
                      className="bg-cover w-[15px]"
                    />
                  </div>
                  <p className="text-[24px] font-bold">SAMPLE</p>
                </div>
                <p className="text-[16px] font-medium w-[370px] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About us */}
        <div
          id="about-us"
          className="flex justify-between items-center w-full h-[100vh] px-56 pt-40"
        >
          {/*Column 1*/}
          <div className="flex flex-col w-1/2 pb-14">
            <div className="flex flex-row">
              <div className="border w-[223px] h-[280px] relative">
                <div className="bg-[#ED6C8D] w-[219px] h-[221px] absolute top-0 right-0 mt-[-32px] mr-[-32px] outline outline-[#030812] outline-[11px] hover:scale-105 z-50 transition-all cursor-pointer"></div>
                <div className="flex flex-col justify-end text-left h-full pl-8 pb-3">
                  <p className="text-[16px] font-bold pb-1">Manage</p>
                  <p className="text-[12px] font-medium text-[#BDBDBD] w-[170px]">
                    Lorem ipsum dolor consectetur, adipiscing elit rooliep
                    ynnej.
                  </p>
                </div>
              </div>

              <div className="pt-[66px] pl-[123px]">
                <div className="border w-[223px] h-[280px] relative">
                  <div className="bg-[#ED6C8D] w-[219px] h-[221px] absolute top-0 right-0 mt-[-32px] mr-[-32px] outline outline-[#030812] outline-[11px] hover:scale-105 z-50 transition-all cursor-pointer"></div>
                  <div className="flex flex-col justify-end text-left h-full pl-8 pb-3">
                    <p className="text-[16px] font-bold pb-1">Track</p>
                    <p className="text-[12px] font-medium text-[#BDBDBD] w-[170px]">
                      Lorem ipsum dolor consectetur, adipiscing elit rooliep
                      ynnej.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row pl-[50px]">
              <div className="border w-[223px] h-[280px] relative">
                <div className="bg-[#ED6C8D] w-[219px] h-[221px] absolute top-0 right-0 mt-[-32px] mr-[-32px] outline outline-[#030812] outline-[11px] hover:scale-105 z-50 transition-all cursor-pointer"></div>
                <div className="flex flex-col justify-end text-left h-full pl-8 pb-3">
                  <p className="text-[16px] font-bold pb-1">Record</p>
                  <p className="text-[12px] font-medium text-[#BDBDBD] w-[170px]">
                    Lorem ipsum dolor consectetur, adipiscing elit rooliep
                    ynnej.
                  </p>
                </div>
              </div>

              <div className="pt-[66px] pl-[123px]">
                <div className="border w-[223px] h-[280px] relative">
                  <div className="bg-[#ED6C8D] w-[219px] h-[221px] absolute top-0 right-0 mt-[-32px] mr-[-32px] outline outline-[#030812] outline-[11px] hover:scale-105 z-50 transition-all cursor-pointer"></div>
                  <div className="flex flex-col justify-end text-left h-full pl-8 pb-3">
                    <p className="text-[16px] font-bold pb-1">Maintained</p>
                    <p className="text-[12px] font-medium text-[#BDBDBD] w-[170px]">
                      Lorem ipsum dolor consectetur, adipiscing elit rooliep
                      ynnej.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Column 2*/}
          <div className="flex flex-col justify-center items-start text-left w-1/2 pl-[150px] gap-7 mb-[100px]">
            <p className="text-[36px] font-bold">About us</p>
            <p className="w-[540px] text-[18px] font-medium text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim!Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
            <p className="w-[540px] text-[18px] font-medium text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="flex flex-row items-center justify-center bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-[216px] h-[59px] rounded-[16px] active:scale-95 transition-all">
              <div className="flex justify-center items-center bg-[#030812] w-[210px] h-[53px] rounded-[13px] gap-3">
                <LuRocket className="text-[24px]" />
                <p className="font-bold text-[20px]">Get started</p>
              </div>
            </button>
          </div>
        </div>

        {/* Contact us */}
        <div
          id="contact-us"
          className="flex flex-col items-center justify-center h-[110vh] w-full px-56 pt-32"
        >
          <div className="flex flex-row justify-center items-center gap-32">
            <div className="flex flex-col justify-center items-center gap-5 mt-16">
              <div className="rounded-[24px] border-[8px] border-[#353941] outline outline-1 outline-[#676A70] cursor-pointer">
                <img
                  src="/images/avatar-girl.jpeg"
                  className="object-scale-down w-full h-[142px] rounded-[16px]"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[22px] font-bold">Jenny Pieloor</p>
                <p className="text-[16px] font-normal text-[#B7B4BB]">
                  Front-End Developer
                </p>
              </div>

              <div className="flex flex-row justify-items items-center gap-4 icons">
                <button className="text-[18px]">
                  <FaTwitter />
                </button>
                <button className="text-[19px]">
                  <FaDiscord />
                </button>
                <button className="text-[18px]">
                  <FaInstagram />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
              <div className="rounded-[24px] border-[8px] border-[#353941] outline outline-1 outline-[#676A70] cursor-pointer">
                <img
                  src="/logo.svg"
                  className="object-scale-down w-full h-[142px] rounded-[16px]"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[22px] font-bold">JumpStart</p>
                <p className="text-[16px] font-normal text-[#B7B4BB]">
                  Official Website
                </p>
              </div>

              <div className="flex flex-row justify-items items-center gap-4 icons">
                <button className="text-[18px]">
                  <FaTwitter />
                </button>
                <button className="text-[19px]">
                  <FaDiscord />
                </button>
                <button className="text-[18px]">
                  <FaInstagram />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 mt-16">
              <div className="rounded-[24px] border-[8px] border-[#353941] outline outline-1 outline-[#676A70] cursor-pointer">
                <img
                  src="/images/avatar-boy.jpeg"
                  className="object-scale-down w-full h-[142px] rounded-[16px]"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[22px] font-bold">Jhoemer Muyco</p>
                <p className="text-[16px] font-normal text-[#B7B4BB]">
                  Full-Stack Developer
                </p>
              </div>

              <div className="flex flex-row justify-items items-center gap-4 icons">
                <button className="text-[18px]">
                  <FaTwitter />
                </button>
                <button className="text-[19px]">
                  <FaDiscord />
                </button>
                <button className="text-[18px]">
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 pt-[60px]">
            <p className="text-[14px] font-normal text-[#9A9CA0] tracking-[.27em]">
              MANAGE YOUR COMMISSIONS ON
            </p>

            <div className="flex flex-row justify-center items-center gap-3 cursor-pointer">
              <img src="/logo.svg" />
              <p className="text-[40px] font-bold">JumpStart</p>
            </div>

            <p className="w-[550px] text-[18px] font-medium text-[#CDCED0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="flex flex-row items-center justify-center gap-3 bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-[216px] h-[59px] rounded-[16px] mt-6 active:scale-95 transition-all">
              <LuRocket className="text-[24px]" />
              <p className="font-bold text-[20px]">Email us!</p>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-center items-center bg-[url('/images/wave.png')] bg-cover h-[156px] w-full text-[13px] font-normal gap-2 text-[#CCD6F6] pt-9">
          <p>Design & Built by Jenny Pieloor</p>
          <p>2024</p>
        </div>
      </div>

      {/*══════════════════════════════════════════════════════════════════════════ 
                              M O B I L E  C O N T A I N E R                                   
        ══════════════════════════════════════════════════════════════════════════*/}
      <div className="flex-col bg-[#030812] w-full h-full text-white md:hidden">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center px-5 h-[70px] pt-2 w-full fixed top-0 bg-[#030812]/30 backdrop-blur-md z-50 ">
          <button className="flex flex-row justify-start items-center gap-2">
            <img src="/logo.svg" className="object-cover w-[25px] h-[26px]" />
            <p className="text-[16px] font-bold">JumpStart</p>
          </button>

          <button className="text-white">
          <RxHamburgerMenu className="w-5 h-4"/>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col pt-16 px-5">
          <div className="flex justify-center items-center">
            <img src="/images/startup.png" className="object-cover w-[350px] h-[290px]"/>
          </div>

            {/* <div className="pt-3 pl-2">
              <img src="/images/star-one.svg" className="w-[18px] h-[18px]"/>
            </div> */}

            <div className="flex flex-col items-start mt-4">
              <p className="text-[24px] font-medium">Want to manage your</p>
              <div className="flex flex-col items-start text-[36px] font-bold bg-gradient-to-b from-[#FDAE8F] to-[#FD1C68] bg-clip-text text-transparent mt-[-5px]">  
                <p>Commissions?</p>
                <img
                  src="/images/line.svg"
                  className="w-[210px] bg-cover mt-[-4px] ml-1"
                />
              </div>
            </div>

            <div className="flex flex-col items-start text-[12px] text-[#CFCFD1] font-normal pt-5 pb-5">
              <p>Take control of your commissions with ease.</p>
              <p>᠎᠎᠎᠎ Lets track it together!</p>
            </div>

            {/* <div className="flex flex-row justify-between px-3 pb-5">
              <img src="/images/star-two.svg" className="w-[8px] h-[8px]"/>
              <img src="/images/star-three.svg" className="w-[10px] h-[10px] mr-20" />
            </div> */}

            <div className="flex flex-row justify-center items-center">
              <div className="flex flex-col items-start gap-3 text-[14px] font-medium tracking-[1px] pt-2 w-full">
                <button className="flex flex-row items-center justify-center gap-3 bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-full h-[50px] rounded-[8px] active:scale-95 transition-all">
                  <LuRocket className="text-[18px]" />
                  <p>Get started</p>
                </button>
                <button className="flex flex-row justify-center items-center gap-3 border-[1px] w-full h-[50px] rounded-[8px] active:scale-95 transition-all">
                  <IoIosEye className="text-[18px]" />
                  <p>View Demo</p>
                </button>
              </div>
            </div>
        </div>

        

      </div>
    </>
  );
}

export default App;
