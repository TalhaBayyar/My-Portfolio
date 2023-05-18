import React from 'react'

function Footer() {
  return (
    <footer className='inset-x-0 bottom-0 bg-gray-100 mt-5 fixed w-full'>
      <div className="max-w-screen-lg mx-auto flex justify-center">
<div className="flex items-center mt-4">
<img src="/images/instagram.png" width="32px" alt="" className="mx-2" />
<img src="/images/facebook.png" width="32px" alt="" className="mx-2" />
<img src="/images/github.png" width="32px" alt="" className="mx-2" />
<img src="/images/linkedin.png" width="32px" alt="" className="mx-2" />
<a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik"><img src="/images/email.png" width="32px" alt="" className="mx-2" /></a>
</div>

</div> 
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

{/*   */}