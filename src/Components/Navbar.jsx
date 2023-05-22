import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("click :" + isOpen)
  }


  
 
  
  
  return (
    <header className='mt-8 header'>
      
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">

        <div className='hidden sm:block'>
          <div className="flex items-center">
           
            <div className="">
            <Link className='italiana text-sm lg:text-[20px] font-semibold  hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/">Home</Link>
            </div>
            <div className="ml-4 sm:ml-6">
              <Link className='italiana text-sm lg:text-[20px] font-semibold hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/about">About</Link>
            </div>
            <div className="ml-4 sm:ml-6">
              <Link className='italiana text-sm lg:text-[20px] font-semibold hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="flex-grow text-center">
          <Link className='ml-6 sm:mr-16 md:mr-20 xl:mr-20 2xl:mr-20 text-[30px] lg:text-[48px] redressed hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/">Talha Bayyar</Link>
        </div>

        <div className="ml-6 hidden sm:block">
          <Link to="/Talha-Bayyar.pdf" target="_blank" download className='italiana text-sm lg:text-[20px] font-semibold hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75'>Download CV</Link>
        </div>

        <div className="flex items-center">
          <div className="sm:hidden flex items-center mr-3">
            <button onClick={handleMenuClick} className='bg-none'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>


      </nav>
      
        

      {isOpen && (
        <div className={`block sm:hidden overflow-hidden top-20 right-0 transform ${isOpen ? 'animate-slowOpen' : ''} transition-transform duration-300`} style={{position: 'absolute', zIndex: 2}}>
          <div className="ml-6">
            <Link className='block px-2 py-1 italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/">Home</Link>
          </div>
          <div className="ml-6">
            <Link className='block px-2 py-1 italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/about">About</Link>
          </div> 
          <div className="ml-6">
            <Link className='block px-2 py-1 italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75' to="/portfolio">Portfolio</Link>
          </div>
          <div className="ml-6">
          <Link to="/Talha-Bayyar.pdf" target="_blank" download className='block px-2 py-1 italiana hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75'>Download CV</Link>
          </div>
          
          <div className="transition-all duration-500 ease-in-out transform origin-top ml-6">
              <svg className="w-6 h-6 text-gray-700 lg:hidden cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414l3.999 3.999a1 1 0 001.414 0l3.999-3.999a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
        </div>

        
      
      )}

      
    </header>
  );
}

export default Navbar;
