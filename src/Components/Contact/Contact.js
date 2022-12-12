import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const formSubmit = event => {
        event.preventDefault();
        const form = event.target
        emailjs.sendForm('service_avliicf', 'template_pnr693f', form, '5gV2dahoLxRGmGr7P')
            .then((result) => {

                toast.success('successfully send Message')

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="my-16">
            {/* three card start  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="card w-full bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <div className="flex justify-between gap-2">
                            <p>Country: </p>
                            <p>United State</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>City: </p>
                            <p>New York</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>Street: </p>
                            <p>Astoriya, NY</p>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <div>
                            <p>mahbubaakhter22@gmail.com</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>GitHub: </p>
                            <p>Mahbuba-Akhter-Ema</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>Linkedin: </p>
                            <p>Mahbuba Akhter</p>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <div className="flex justify-between gap-2">
                            <p>Number: </p>
                            <p>+1 (347) 656-1408</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>Whats'app: </p>
                            <p>+1 (347) 656-1408</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <p>Skype: </p>
                            <p>Mahbuba Akhter</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* three card end  */}

            <h1 className="text-3xl text-white p-4 font-bold mt-5 ">Get in touch</h1>

            <div
                className=""
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <form onSubmit={formSubmit} className="flex-shrink-0 w-full  shadow-2xl bg-white p-4 md:p-16 py-10">
                    <div class="flex my-12">
                        <span class="inline-flex items-center  text-sm bg-rose-400 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            <FaUser></FaUser>
                        </span>
                        <input
                            type="text"
                            id="website-admin"
                            name='name'
                            class="rounded-none rounded-r-lg focus:ring-0 focus:border-hidden text-black  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-400 border-0 placeholder-gray-900"
                            placeholder="Username"
                        />
                    </div>

                    <div class="flex my-12">
                        <span class="inline-flex items-center  text-sm bg-rose-400 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            @
                        </span>
                        <input
                            type="email"
                            id="website-admin"
                            name='email'
                            class="rounded-none rounded-r-lg focus:ring-0 focus:border-hidden  text-black  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-400 border-0 placeholder-gray-900"
                            placeholder="Email"
                        />
                    </div>

                    <div class="flex">
                        <span class="inline-flex items-center  text-sm bg-rose-400 border border-r-0 border-zinc-800 rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            <FaEnvelope></FaEnvelope>
                        </span>

                        <textarea
                            name='message'
                            className="textarea focus:ring-0 focus:border-hidden  rounded-none rounded-r-lg  text-black block flex-1 min-w-0 w-full text-sm  p-2.5  bg-zinc-400  placeholder-gray-900"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <div className=" mt-12 text-center md:text-start">
                        <input
                            type="submit"
                            className="btn rounded-none px-6 hover:-translate-y-1 duration-500 bg-rose-500"
                            value="Send Message"
                        />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;