import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


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
    <article>
      <div className="flex ">
        <div className="w-1/3 ">
          <div className=" text-center py-6 font-semibold text-xl ">
          <div className='hidden sm:block'>
            
          </div>
          </div> 
        </div>

        <div className="w-1/3">
          
            <div className='flex justify-center items-center max-w-screen-xl mx-auto'>
              <div className="min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[402px] md:max-w-[402px] md:min-h-[432px] md:max-h-[432px]">
                <img src="/images/talha-bayyar.jpg" alt="" className="object-cover drop-shadow-2xl rounded-lg" />
              </div>
              <div className="mr-[190px] ms:mr-[215px] md:mr-[360px] xl:mr-[370px] absolute flex justify-center items-center italiana font-semibold text-[20px] xl:text-4xl">
                <div ref={textRef}>HI I'M</div>
                <div className="flex items-center w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-[1px] border-x-slate-400 border-y-slate-400" ref={textRef}></div>
              </div> 
            </div>
          
        </div>
        
      </div>
    </article>

  );
}

export default Home;
      