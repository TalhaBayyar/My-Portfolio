import { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/TalhaBayyar/repos', {
          headers: {
            Authorization: 'Bearer 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',
          },
          
        });
        setProjects(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const selectedProjects = ['Weather-App'];
  const selectedProjectsTwo = ['React-Todos-App']
  const selectedProjectsThree = ['color-picture']
  const selectedProjectsFour = ['Personel-Portfolio']
 
  return (
    <div className='mt-40'>
      <nav className="flex  flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[352px] md:max-w-[352px] md:min-h-[332px] md:max-h-[332px]" src="/images/React-Todos.png" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="italiana mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <div>
                      {Array.isArray(projects) && projects
                        .filter(project => selectedProjectsTwo.includes(project.name))
                        .map((project) => (
                          <div key={project.id}>
                            <Link to={project.html_url} target="_blank" className=''>
                              {project.name}
                            </Link>
                        </div>
                      ))}
                    </div>
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The application offers users a user-friendly interface to keep track of their daily tasks. </p>
                  <div className="flex items-center mt-4">
                    <a href="https://github.com/TalhaBayyar/React-Todos-App" target='blank'>
                      <img src="/images/github.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                    </a>
                    <a href="https://react-todos-opal.vercel.app/#/" target='blank'>
                      <img src="/images/live.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="h-full">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[352px] md:max-w-[352px] md:min-h-[332px] md:max-h-[332px]" src="/images/Color-Picture.png" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="italiana mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>
                    {Array.isArray(projects) && projects
                      .filter(project => selectedProjectsThree.includes(project.name))
                      .map((project) => (
                        <div key={project.id}>
                          <Link to={project.html_url} target="_blank" className=''>
                            {project.name}
                          </Link>
                        </div>
                      ))}
                  </div>
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="flex items-center mt-4">
                  <a href="https://github.com/TalhaBayyar" target='blank'>
                    <img src="/images/github.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                  </a>
                  <a href="https://color-picture-gbpe.vercel.app/" target='blank'>asdas
                    <img src="/images/live.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>


      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">

        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[352px] md:max-w-[352px] md:min-h-[332px] md:max-h-[332px]" src="/images/Weather-App.png" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="italiana mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>
                        {Array.isArray(projects) && projects
                          .filter(project => selectedProjects.includes(project.name))
                          .map((project) => (
                            <div key={project.id}>
                              <Link to={project.html_url} target="_blank" className=''>
                                {project.name}
                              </Link>
                            </div>
                          ))}
                      </div>
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Weather app offers users a simple and user-friendly interface that displays real-time weather information.</p>
                    <div className="flex items-center mt-4">
                      <a href="https://github.com/TalhaBayyar" target='blank'>
                        <img src="/images/github.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                      </a>
                      <a href="https://weather-app-six-rose.vercel.app/" target='blank'>
                        <img src="/images/live.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>





            <div className="w-full lg:w-1/2">
              <div className="h-full">
                <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg relative min-w-[202px] max-w-[202px] min-h-[232px] max-h-[232px] md:min-w-[352px] md:max-w-[352px] md:min-h-[332px] md:max-h-[332px]" src="/images/Talha-Bayyar-Full-Screen.png" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="italiana mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>
                        {Array.isArray(projects) && projects
                          .filter(project => selectedProjectsFour.includes(project.name))
                          .map((project) => (
                            <div key={project.id}>
                              <Link to={project.html_url} target="_blank" className=''>
                                {project.name}
                              </Link>
                            </div>
                        ))}
                      </div>
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">My portfolio includes examples showing that I have developed interactive and user-friendly web applications built with modern web development technologies.</p>
                    <div className="flex items-center mt-4">
                      <a href="https://github.com/TalhaBayyar" target='blank'>
                        <img src="/images/github.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                      </a>
                      <a href="https://weather-app-six-rose.vercel.app/" target='blank'>
                        <img src="/images/live.png" width="32px" alt="github" className="animate-bounce mx-2 hover:cursor-pointer hover:opacity-50 focus:outline-none focus:opacity-75" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        </nav>
      </div>
  )
}

export default Portfolio



     