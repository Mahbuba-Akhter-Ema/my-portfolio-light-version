import React from 'react';
import Contact from '../Contact/Contact';
import FirstSideNav from '../FirstSideNav/FirstSideNav';

const ContactComponent = () => {
    return (
        <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div
            className=" w-full lg:w-2/4 bg-zinc-800 rounded-sm "
            data-aos="fade-up"
          >
            <FirstSideNav></FirstSideNav>
          </div>
  
          <div data-aos="fade-down" className=" lg:-ml-[300px] p-4">
            
            <Contact></Contact>
          </div>
        </div>
        
      </div>
    );
};

export default ContactComponent;