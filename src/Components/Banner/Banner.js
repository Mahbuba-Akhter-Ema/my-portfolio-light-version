import React from 'react';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTypewriter } from "react-simple-typewriter";
import '../Home/Home.css';
import Slider from '../Slider/Slider';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Quizo', 'home-store', 'Doctors Portal', 'Muslimah', 'goLearn'],
    loop: Infinity
  })
  return (
    <div>
      <div
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500"
        className="hero mt-10 "
        style={{
          backgroundImage: `url("https://i.ibb.co/ts2vPp3/pexels-myburgh-roux-1102797.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content mx-10 text-neutral-content grid grid-cols-1 md:grid-cols-2">
          <div className="max-w-md">
            <h4 className="mb-5 text-sm  md:text-4xl font-bold text-white">
              Discover my Amazing <br /> Art Space!
            </h4>
            <p className="mb-5 text-white font-bold text-sm md:text-3xl">
              I build: <span>{text}</span>
            </p>
            <button className="btn rounded-none px-6 hover:-translate-y-1" style={{ backgroundColor: "#f46258", color: "#FFFFFF" }}>Explore Now</button>
          </div>

          <img
            className="lg:h-[450px] w-full md:-mt-16 -mb-4"
            src="https://i.ibb.co/vY2c3Hb/final-img-removebg-preview.png"
            alt=""
          />
        </div>
      </div>


      <div
        data-aos="fade-down-right"
        className="grid grid-cols-1 md:grid-cols-4 my-4"
      >
        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#f46258" }}>
            1+{" "}
          </p>
          <p>Year's Experience</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#f46258" }}>
            5+{" "}
          </p>
          <p>Completed Projects</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#f46258" }}>
            104+{" "}
          </p>
          <p>Happy Customers</p>
        </div>

        <div className="flex gap-3 justify-center items-center text-center">
          <p className="text-2xl font-bold" style={{ color: "#f46258" }}>
            4+{" "}
          </p>
          <p>Honors and Awards</p>
        </div>
      </div>

      {/* my services  */}

      <section class="service mt-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold " style={{ color: "#f46258" }}>
            My Services
          </h1>
          <p className="mt-3">
            MERN stands for MongoDB, ExpressJS, React, and Node. <br /> MERN is
            a Web development stack for building full stack Web applications.
          </p>
        </div>

        <div class="service-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4">
          <div class=" mb-5" data-aos="flip-left">
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-2xl">
                MERN Stack Development
              </h4>
              <p class="text-center mt-4">
                MERN stack is a collection of technologies that enables faster
                application development.
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>

          <div class=" mb-5" data-aos="fade-left">
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-2xl">
                Front-end Development
              </h4>
              <p class="text-center mt-4">
                Front-end web development, also known as client-side development
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>

          <div class=" mb-5" data-aos="fade-left">
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-2xl">
                Back-end Development
              </h4>
              <p class="text-center mt-4">
                Back-end development means working on server-side. which focuses
                on everything.
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>

          <div class=" mb-5" data-aos="fade-up-right">
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-2xl">Bug Solving</h4>
              <p class="text-center mt-4">
                A bug fix is a change to a system or product designed to handle
                a programming bug/glitch.
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>

          <div class=" mb-5" data-aos="fade-left">
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-2xl">Web Design</h4>
              <p class="text-center mt-4">
                Web design refers to the design of websites that are displayed
                on the internet.
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>

          <div
            class=" mb-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div class="box">
              <span className="-mt-4">
                <FaComment
                  className=""
                  style={{ color: "#f46258" }}
                ></FaComment>
              </span>
              <h4 class="mt-5 text-center text-sm md:text-3xl">
                Web Development
              </h4>
              <p class="text-center mt-4">
                Web developers create and maintain websites. They are also
                responsible for the site's.
              </p>
              <center>
                <button class="btn btn-outline border-rose-500 hover:bg-rose-500 hover:border-0 my-10 visit-button">
                  Order Now
                </button>
              </center>
            </div>
          </div>
        </div>
      </section>

      {/* pricing start  */}

      <div class=" mb-5">
        <section class="pricing" id="pricingdiv">
          <div class="container headings text-center -mt-10">
            <h1 class="text-center font-weight-bold text-warning my-16 text-4xl" style={{ color: "#f46258" }}>
              MY PRICING
            </h1>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              class="col-lg-4 col-12 mb-5  "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div class="card text-center ">
                <div class="card-header">BASIC</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">50</span>Websites
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support</li>
                </div>

                <div class="card-footer">
                  <Link to="">Order Now</Link>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-12 second "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div class="card text-center">
                <div class="card-header">STANDRD</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">80</span>Websites
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support</li>
                </div>

                <div class="card-footer">
                  <Link to="">Order Now</Link>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-12 "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div class="card text-center">
                <div class="card-header">UNLIMITED</div>
                <div class="card-body">
                  <li>
                    $ <span class="money">120</span>Websites
                  </li>
                  <li>Responsive Websites</li>
                  <li>Domain Name Free</li>
                  <li>Mobile Friendly</li>
                  <li>Webmail Support</li>
                  <li>Customer Support</li>
                </div>

                <div class="card-footer">
                  <Link to="">Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;