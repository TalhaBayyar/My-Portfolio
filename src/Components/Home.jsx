import { React, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['TALHA'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      startDelay: 1000,
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='flex justify-start items-center max-w-screen-xl mx-auto mt-40'></div>
        <div className='flex justify-center items-center max-w-screen-xl mx-auto '>
          <div className="relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[402px] md:max-w-[402px] md:min-h-[432px] md:max-h-[432px]">
            <img src="/images/talha-bayyar.jpg" alt="" className="object-cover drop-shadow-2xl rounded-lg" />
          </div>
          <div className="mr-[190px] ms:mr-[215px] md:mr-[360px] xl:mr-[370px] absolute flex justify-center items-center italiana font-semibold text-[20px] xl:text-4xl">
            <div ref={textRef}>HI I'M</div>
            <div className="flex items-center w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-[1px] border-x-slate-400 border-y-slate-400" ref={textRef}></div>
          </div> 
        </div>

      <div className='flex justify-center sm:justify-end items-center max-w-screen-xl mx-auto border-4'>
        <div className="mt-[80px] items-center sm:mt-[-200px]">
          <div className="max-w-screen-lg sm:max-w-screen-lg">
            <Link className='italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/about">
              <div className="flex flex-col items-center mt-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center bg-white">
                  <img src="/images/next.png" width="32px" alt="" className="mx-2 animate-bounce" />
                </div>
                <div className="mt-2 text-center italiana text-[25px] font-semibold">
                  About Me
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
     