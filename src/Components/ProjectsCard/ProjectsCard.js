import React, { useEffect, useState } from 'react';

const ProjectsCard = ({setModalData}) => {
    const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-full my-4">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-rose-500 uppercase rounded-full ">
              My Projects
            </p>
          </div>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {projects?.map((project) => (
            <div key={project.id} data-aos="zoom-out-right">
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={project.picture}
                    alt="Person"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-3 text-2xl font-bold text-white">
                      {project?.name}
                    </p>

                    <div className="text-center">
                      <label onClick={()=> setModalData(project)} htmlFor="ProjectModal" className="btn  bg-rose-500 hover:bg-rose-500  text-white border-0">
                        Details
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;