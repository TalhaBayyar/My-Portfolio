import { useEffect, useState} from 'react'
import axios from 'axios'

function Portfolio() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get('https://api.github.com/users/TalhaBayyar/repos', {
  //         headers: {
  //           Authorization: 'Bearer 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',
  //         },
          
  //       });
  //       setProjects(response.data);
  //       console.log(response.data[0].archive_url)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProjects();
  // }, []);




  return (
    <div className='mt-40'>
    
   

      
      

    <nav className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">

<div className="w-full lg:w-1/2 mb-4 lg:mb-0">
  <div className="flex flex-col md:flex-row items-center">
    <div className="w-full md:w-auto mb-4 md:mb-0">
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/strett.jpg" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a>
    </div>
    <div className="hidden md:block md:w-auto ml-4">
      {/* İkinci içerik */}
    </div>
  </div>
</div>

<div className="flex-grow text-center">
  ss
</div>

<div className="w-full lg:w-1/2">
  <div className="h-full">
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/strett.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  </div>
</div>


</nav>


<nav className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">

<div className="w-full lg:w-1/2 mb-4 lg:mb-0">
  <div className="flex flex-col md:flex-row items-center">
    <div className="w-full md:w-auto mb-4 md:mb-0">
      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/strett.jpg" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a>
    </div>
    <div className="hidden md:block md:w-auto ml-4">
      {/* İkinci içerik */}
    </div>
  </div>
</div>

<div className="flex-grow text-center">
  ss
</div>

<div className="w-full lg:w-1/2">
  <div className="h-full">
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/strett.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </a>
  </div>
</div>


</nav>

      












{/* <div className="w-full md:w-auto mb-4 md:mb-0">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/strett.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
            </a>
          </div> */}












   
      

 
    </div>
  )
}

export default Portfolio



      {/* <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul> */}