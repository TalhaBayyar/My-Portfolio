import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Footer from './Footer';

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
      
      <div className='flex justify-start items-center max-w-screen-xl mx-auto mt-20'>

      
        {/* <div className="">
          Talha Bayyar
        </div> */}
        
      </div>


      <div className='flex justify-center items-center max-w-screen-xl mx-auto'>

      
        <div className="min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[402px] md:max-w-[402px] md:min-h-[432px] md:max-h-[432px]">
          <img src="/images/talha-bayyar.jpg" alt="" className="object-cover drop-shadow-2xl rounded-lg" />
        </div>

        <div className="mr-[190px] ms:mr-[215px] md:mr-[360px] xl:mr-[370px] absolute flex justify-center items-center italiana font-semibold text-[20px] xl:text-4xl">
          <div ref={textRef}>HI I'M</div>
          <div className="flex items-center w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-[1px] border-x-slate-400 border-y-slate-400" ref={textRef}></div>
        </div> 
        
      </div>



      <div className='flex justify-center sm:justify-end items-center max-w-screen-xl mx-auto border-4'>


     
         
            
            {/* <div className="flex flex-col items-center mt-2 bg-sky-500">
              <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-white bg-white">
                <img src="/images/next.png" alt="" className="max-w-[32px] min-w-[32px]" />
              </div>
              <div className="mt-2 text-center italiana text-[24px]">
                About Me
              </div>
            </div> */}
          
         
            <div className="mt-[40px] items-center sm:mt-[-200px]">
  <div className="max-w-screen-lg sm:max-w-screen-lg  ">
    <div className="flex flex-col items-center mt-2">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center bg-white">
        <img src="/images/next.png" width="32px" alt="" className="mx-2 animate-bounce" />
      </div>
      <div className="mt-2 text-center italiana text-[25px] font-semibold">About Me</div>
    </div>
  </div>
</div>
       
        
      </div>


      <div className="max-w-screen-lg mx-auto flex justify-center mt-10 sm:mt-40">
    <div className="flex items-center mt-4">
      <img src="/images/instagram.png" width="32px" alt="" className="mx-2" />
      <img src="/images/facebook.png" width="32px" alt="" className="mx-2" />
      <img src="/images/github.png" width="32px" alt="" className="mx-2" />
      <img src="/images/linkedin.png" width="32px" alt="" className="mx-2" />
      <a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik"><img src="/images/email.png" width="32px" alt="" className="mx-2" /></a>
    </div>
    
  </div> 

  <Footer />
    </>

  );
}

export default Home;
     {/* 
      <div className="flex justify-center items-center w-full h-full">
        <img src="/images/talha-bayyar.jpg" alt="" className="object-cover w-full h-full max-w-[402px] max-h-[432px] drop-shadow-md " />
        <div className="absolute flex justify-start items-center left-2 sm:left-16 md:left-16 lg:left-32 xl:left-72 2xl:left-[580px]">
        <div className="flex justify-end text-2xl sm:text-3xl md:text-4xl lg:text-5xl italiana" ref={textRef}>HI I'M</div>
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2  flex items-center justify-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl italiana" ref={textRef}></div>
        </div>
    </div>
  
  <div className="mt-[20] sm:mt-[-200px] md:mt-[-200px] lg:mt-[-200px] xl:mt-[-200px] 2xl:mt-[-200px]">
  <div className="max-w-screen-lg sm:max-w-screen-lg md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-lg  mx-auto flex justify-center sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
    <div className="flex flex-col items-center mt-2">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center bg-white">
        <img src="/images/next.png" width="32px" alt="" className="mx-2" />
      </div>
      <div className="mt-2 text-center italiana text-[25px]">About Me</div>
    </div>
  </div>
</div>


  <div className="max-w-screen-lg mx-auto flex justify-center">
    <div className="flex items-center mt-12 ">
      <img src="/images/instagram.png" width="32px" alt="" className="mx-2" />
      <img src="/images/facebook.png" width="32px" alt="" className="mx-2" />
      <img src="/images/github.png" width="32px" alt="" className="mx-2" />
      <img src="/images/linkedin.png" width="32px" alt="" className="mx-2" />
      <a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik"><img src="/images/email.png" width="32px" alt="" className="mx-2" /></a>
    </div>

  </div> 

*/}