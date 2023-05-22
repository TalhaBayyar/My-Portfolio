import { useState, useEffect, useRef } from 'react';
import Education from "./Background/Education"
import Skills from "./Background/Skills"
import WorkExperience from "./Background/WorkExperience"
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ABOUT ME'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      startDelay: 1000,
      showCursor: false,
    };
  
    const typed = new Typed(".typed", options);
    return () => {
      typed.destroy();
    };
  }, []);

  

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  return (
    <>
      <div className='flex justify-start items-center max-w-screen-xl mx-auto mt-40'> </div>

      <div className='flex justify-center items-center max-w-screen-xl mx-auto'>
        <div className="relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[402px] md:max-w-[402px] md:min-h-[432px] md:max-h-[432px]">
          <img src="/images/talha-bayyar.jpg" alt="" className="object-cover drop-shadow-2xl rounded-lg" />
          <div className="absolute inset-0 flex justify-center items-center" >
            <h2 className="text-[#B9B9B9] text-[40px] md:text-[80px] italiana mt-20 md:mt-40 typed"></h2>
          </div>
          <div className='absolute sm:right-0 sm:bottom-0 mb-[-30px] mr-[130px] sm:mr-[630px] min-w-[200px] max-w-[200px] max-h-[200px] min-h-[200px]'>
            <div className="flex justify-between items-center max-w-screen-lg mx-auto">
              <div className="flex items-center">
                <div className="max-w-sm mx-auto italiana">
                  <div className=" text-sm md:text-md flex drop-shadow-lg font-semibold">
                    <button
                      
                      className={` ${activeTab === 'education' ? 'drop-shadow-lg' : ''} hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75`}
                      onClick={() => handleTabClick('education')}
                    >
                      Education
                    </button>
                    <button
                      className={`py-2 px-2 ${activeTab === 'workExperience' ? 'drop-shadow-lg' : ''} hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75`}
                      onClick={() => handleTabClick('workExperience')}
                    >
                      Work Experience
                    </button>
                    <button
                      className={`py-2 ${activeTab === 'skills' ? 'drop-shadow-lg' : ''} hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75`}
                      onClick={() => handleTabClick('skills')}
                    >
                      Skills
                    </button>
                  </div>
                  <div className="">
                    {activeTab === 'education' && <Education />}
                    {activeTab === 'workExperience' && <WorkExperience />}
                    {activeTab === 'skills' && <Skills />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center sm:justify-end items-center max-w-screen-xl mx-auto border-4'>
        <div className="mt-[250px] items-center sm:mt-[-200px]">
        <Link className='italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/portfolio">
            <div className="max-w-screen-lg sm:max-w-screen-lg  ">
              <div className="flex flex-col items-center mt-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center bg-white">
                  <img src="/images/next.png" width="32px" alt="" className="mx-2 animate-bounce" />
                </div>
                <div className="mt-2 text-center italiana text-[25px] font-semibold">me portfolio</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default About;
  