import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProjectModal = ({modalData}) => {
    const { name, picture, details, details2, details3, details4, technology, liveLink } = modalData;
    return (
        <div className="border-red-400 bg-red-600">
            <input type="checkbox" id="ProjectModal" className="modal-toggle" />
            <label htmlFor="ProjectModal" className="modal cursor-pointer">
                <label
                    className="modal-box relative "
                    htmlFor=""
                >
                    <div className="">
                        <figure >
                            <img src={picture} className="w-full h-[300px]" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">{name}</h2>

                            <p className="flex items-center gap-4 "><FaCheck className="text-warning"></FaCheck> {details}</p>



                            <p className="flex items-center gap-4 "><FaCheck className="text-warning"></FaCheck> {details2}</p>

                            <p className="flex items-center gap-4 "><FaCheck className="text-warning"></FaCheck> {details3}</p>

                            <p className="flex items-center gap-4 "><FaCheck className="text-warning"></FaCheck> {details4}</p>


                            <h1 className="card-title">Technology</h1>

                            <p className="flex items-center gap-4 "> {technology}</p>




                            <div className="card-actions justify-center">
                                <a href={liveLink} target='_blank' className="btn bg-rose-500 px-6 mt-5 hover:-translate-y-1 hover:bg-rose-500 duration-300">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default ProjectModal;