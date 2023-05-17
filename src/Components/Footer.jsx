import React from 'react'

function Footer() {
  return (
   <footer className=' inset-x-0 top-0 bg-gray-100 mt-5'>
      <div className="flex justify-center items-center">
        <div className="flex items-center">
        <img src="/images/copyright.png" width="20px" alt="" className="" />
        <div className='flex'>
            <p className="italiana font-semibold text-sm sm:text-xl">Talha Bayyar Her Hakkı Saklıdır</p>
        </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer