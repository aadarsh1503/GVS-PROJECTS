import React from "react";
import i2 from "./i2.png"

const Footer = () => {
  return (
    <>
      {/* First Footer */}
      <footer className="text-black mt-10 mx-auto max-w-5xl">
        <div className="relative">
          {/* Footer Decoration Image */}
          <img
            src="https://giadungviet.vn/wp-content/uploads/BACKGROUND-FOOTER-1.jpg"
            alt="Footer Decoration 1"
            className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-90" // Adjust opacity for visibility
          />

          <div className="container font-serif text-white p-10 md:p-20 mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h4 className="text-lg font-bold mb-4">About Us</h4>
              <p className="text-sm mb-6">
                Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
              </p>
              <div className="flex space-x-4">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-lg font-bold mb-4">Explore</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Company Profile</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt text-[#9b815d] mr-2"></i>
                  Building 1320, Road 4149, Block 441, North Sehla, Bahrain
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt text-[#9b815d] mr-2"></i>
                  +973 17772211
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-[#9b815d] mr-2"></i>
                  arabiaseelrest@gmail.com
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Join our subscribers list to get the latest news and special offers.
              </p>
              <form className="flex flex-col">
                <input
                  type="email"
                  className="bg-gray-700 text-white p-2 rounded mb-2"
                  placeholder="Your Email"
                />
                <div className="flex items-center mb-4">
                  <input type="checkbox" className="mr-2" />
                  <p className="text-sm">Privacy Text</p>
                </div>
                <button className="bg-[#9b815d] text-white py-2 px-4 rounded hover:bg-[#7e6849] transition">
                  &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
      </footer>

      {/* Second Footer */}
      <footer className="bg-gray-800 text-white">
        <div className=" bg-black inset-0 bg-opacity-90 mx-auto flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex items-center"> {/* Flex container for images */}
            <img 
              src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/9-2.png" 
              alt="Footer Decoration 3" 
              className="h-54 w-44 object-cover mr-2" // Adjust margin as needed
            />
            <img 
              src={i2}
              alt="Small Decoration"
              className="h-32 w-32 ml-10" // Adjust the size as needed
            />
          </div>
          <div className="text-right mt-8"> {/* Right-aligned copyright section */}
            <p className="text-sm">&copy; Copyright 2024 Arabi Aseel. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
