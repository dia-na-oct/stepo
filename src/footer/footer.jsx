import React from "react";
import shape from "./Shape.svg";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="  text-black  p-5  mx-auto ">
      <div className=" mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 bg-black  pt-4  text-white rounded-t-2xl">
          <h2 className="text-xl font-bold my-6 text-center">Company Info</h2>
          <p className="my-6 text-center">
            We'll make sure to provide you with the best quality of assistance.
          </p>
          <div className="flex items-center justify-center my-6">
            <FaPhone className="mr-2" />
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center justify-center my-6">
            <FaMapMarkerAlt className="mr-2" />
            <p>123 React Street, JavaScript City, TS</p>
          </div>
          <div className="flex items-center  justify-center my-6">
            <FaEnvelope className="mr-2" />
            <p>info@company.com</p>
          </div>
          <img src={shape} alt="" className="w-full"/>

        </div>

        <div className="w-full md:w-2/3 px-6 pt-10">
          <h2 className="text-xl font-bold mb-2 text-center">Contact Us</h2>
          <form>
            <div className="mb-4 flex">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border-b-2 bg-transparent border-b-midNightBlueColor focus:border-b-MintGreen outline-none mr-4"
              />
              <input
                type="text"
                placeholder="Your Number"
                className="w-full p-2 border-b-2 bg-transparent border-b-midNightBlueColor ml-4 focus:border-b-MintGreen outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border-b-2 bg-transparent border-b-midNightBlueColor  focus:border-b-MintGreen outline-none "
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border-b-2 bg-transparent border-b-midNightBlueColor  focus:border-b-MintGreen outline-none"
              />
            </div>
            <button
  type="submit"
  className="   text-blackv font-bold py-2 px-4  rounded-lg shadow-lg "
  style={{
    background: 'linear-gradient(to right, #632B6C, #96527A)', // Dégradé de couleur
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Ombre
  }}
>
  Send
</button>

          </form>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
