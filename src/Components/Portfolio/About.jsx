import { useState } from 'react';
import Education from "./Background/Education"
import Skills from "./Background/Skills"
import WorkExperience from "./Background/WorkExperience"


const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
  


  <div className="max-w-screen-lg mx-auto flex justify-center">
    <div className="flex items-center mt-12 ">
      <img src="/images/instagram.png" width="32px" alt="" className="mx-2" />
      <img src="/images/facebook.png" width="32px" alt="" className="mx-2" />
      <img src="/images/github.png" width="32px" alt="" className="mx-2" />
      <img src="/images/linkedin.png" width="32px" alt="" className="mx-2" />
      <a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik"><img src="/images/email.png" width="32px" alt="" className="mx-2" /></a>
    </div>
  </div>























    

  
  );
};

export default About;
  {/* <div className="relative mt-20 border-2 border-blue-500">
        <div className="flex justify-center items-center w-full h-full border-2">
          <img src="/images/talha-bayyar.jpg" alt="" className="object-cover w-full max-w-[402px] max-h-[432px] drop-shadow-md" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#B9B9B9] text-center">
            <h1 className="text-[56px] sm:text-[66px] md:text-[76px] lg:text-[96px] italiana">ABOUT ME</h1>
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
          <nav className=" relative bottom-80 max-w-screen-lg mx-auto">
        <div className="flex items-center">
          <div className="italiana w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 flex items-center justify-center bg-white">
            my background
          </div>
          
        </div>
        </nav>
        </div>


        <div className="max-w-screen-lg mx-auto mt-12 flex justify-center">
          <div className="flex items-center">
            <img src="/images/instagram.png" width="32px" alt="" className="mx-2" />
            <img src="/images/facebook.png" width="32px" alt="" className="mx-2" />
            <img src="/images/github.png" width="32px" alt="" className="mx-2" />
            <img src="/images/linkedin.png" width="32px" alt="" className="mx-2" />
            <a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik">
              <img src="/images/email.png" width="32px" alt="" className="mx-2" />
            </a>
          </div>
        </div>
       
      </div>


      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <div className="flex items-center">
              
          <div className="max-w-sm mx-auto border-2 italiana">
            <div className="flex drop-shadow-lg">
              <button
                className={` ${activeTab === 'education' ? 'drop-shadow-lg' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Education
              </button>
              <button
                className={`py-2 px-4 ${activeTab === 'workExperience' ? 'drop-shadow-lg' : ''}`}
                onClick={() => handleTabClick('workExperience')}
              >
                Work Experience
              </button>
              <button
                className={`py-2 ${activeTab === 'skills' ? 'drop-shadow-lg' : ''}`}
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
      </div> */}