import './App.css'

function App() {

  return (
    <>
      {/*Main Container*/}
      <div className="flex flex-col bg-[#030812] w-full h-full text-white px-56 py-11">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center">
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
            <div className="text-[80px] font-bold gradient-text-to-bl from-[#FDAE8F] to-[#FD1C68]">
              <p>Commissions?</p>
            </div>

            <p className="text-[20px] font-normal pt-4">
              Take control of your commissions with ease. Let's track it
              together!
            </p>

            <div className="flex flex-row gap-4 text-[20px] font-bold pt-6">
              <div className='flex flex-row items-center justify-center gap-3 bg-gradient-to-bl from-[#FDAE8F] to-[#FD1C68] w-[216px] h-[59px] rounded-[16px]'>
                <img src="/images/rocket.svg" />
                <button>Let's go!</button>
              </div>
              <div className='flex flex-row justify-center items-center border-2 w-[216px] h-[59px] rounded-[16px]'>
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

export default App
