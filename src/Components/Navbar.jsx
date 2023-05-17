import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='mt-8'>
      
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">

        <div className='hidden sm:block'>
          <div className="flex items-center">
            <Link className='italiana text-sm lg:text-[20px] font-semibold' to="/">Home</Link>
            <div className="ml-4 sm:ml-6">
              <Link className='italiana text-sm lg:text-[20px] font-semibold' to="/about">About</Link>
            </div>
            <div className="ml-4 sm:ml-6">
              <Link className='italiana text-sm lg:text-[20px] font-semibold' to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>
        
        <div className="flex-grow text-center">
          <Link className='ml-6 sm:mr-16 md:mr-20 xl:mr-20 2xl:mr-20 text-[30px] lg:text-[48px] redressed' to="/">Talha Bayyar</Link>
        </div>

        <div className="ml-6 hidden sm:block">
          <Link to="/Talha-Bayyar.pdf" target="_blank" download className='italiana text-sm lg:text-[20px] font-semibold'>Download CV</Link>
        </div>

        <div className="flex items-center">
          <div className="sm:hidden flex items-center mr-3">
            <button onClick={handleMenuClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="block lg:hidden overflow-hidden " style={{display: "block",
          
          
         
         position: 'absolute', zIndex: 2}}>
          <div className="ml-4">
            <Link className='block px-2 py-2 font-semibold italiana' to="/">Home</Link>
          </div>
          <div className="ml-4">
            <Link className='block px-2 py-2 font-semibold italiana' to="/about">About</Link>
          </div> 
          <div className="ml-4">
            <Link className='block px-2 py-2 font-semibold italiana' to="/portfolio">Portfolio</Link>
          </div>
          <div className="ml-4">
            <Link className='block px-2 py-2 font-semibold italiana animate-bounce' to="/">Download CV</Link>
          </div>
          <button onClick={handleMenuClick}>
            <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              </div>
          </button>
          <div className="transition-all duration-500 ease-in-out transform origin-top">
              <svg className="w-6 h-6 text-gray-700 lg:hidden cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M14.293 5.293a1 1 0 00-1.414-1.414L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414l3.999 3.999a1 1 0 001.414 0l3.999-3.999a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
        </div>

        
      
      )}
    </header>
  );
}

export default Navbar;
