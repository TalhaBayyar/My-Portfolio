function Footer() {
  return (
    <footer className='bottom-0 w-full'>
      <div className="max-w-screen-lg mx-auto flex justify-center mt-10 sm:mt-40 md:mt-44 mb-10">
        <div className="flex items-center mt-4">
          <a href="https://www.instagram.com/tlhabyr/" target='blank'>
            <img src="/images/instagram.png" width="32px" alt="instagram" className="mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010147633151" target='blank'>
            <img src="/images/facebook.png" width="32px" alt="facebook" className="mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
          </a>
          <a href="https://github.com/TalhaBayyar" target='blank'>
            <img src="/images/github.png" width="32px" alt="github" className="mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/talha-bayyar-12a2b7200/" target='blank'>
            <img src="/images/linkedin.png" width="32px" alt="linkedin" className="mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
          </a>
          <a href="mailto:bayyartalha@gmail.com?subject=Konu&body=İçerik">
            <img src="/images/email.png" width="32px" alt="email" className="mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
          </a>
        </div>
      </div> 

      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <img src="/images/copyright.png" width="20px" alt="copyright" />
          <div className='flex'>
            <p className="italiana font-semibold text-sm sm:text-xl">Talha Bayyar Her Hakkı Saklıdır</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer