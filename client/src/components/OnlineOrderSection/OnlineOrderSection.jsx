import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
const OnlineOrderSection = () => {
  return (
    
    <div className="flex flex-col lg:flex-row mb-10 lg:mb-0 items-center rounded-xl max-w-6xl  mx-auto justify-center bg-black text-white py-16 px-8 relative">
      {/* Left Side Image Section */}
      <div className="relative flex-1  flex justify-center items-center order-2 lg:order-1">
        <div className="relative lg:mt-0 mt-4">
          {/* Main Phone Image */}
          <img src="https://wp.validthemes.net/restan/wp-content/uploads/2024/04/16.png" alt="Main Phone" className="w-64  lg:w-[500px] drop-shadow-xl" />
        </div>
      </div>
      
      {/* Right Side Text and Buttons Section */}
      <div className="flex-1 lg:pl-1   text-center lg:text-left order-1 lg:order-2">
  <h2 className="text-4xl lg:text-5xl font-bold mb-4">Are you Ready to Start your online Order?</h2>
  <p className="text-gray-400 mb-8">
    Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.
  </p>
  <div className="flex justify-center lg:justify-start space-x-6 rtl:space-x-reverse">
  <button className="bg-white hover:bg-black hover:text-white mt-1 outline-white outline text-black py-1 lg:px-8 px-6 rounded-full h-11 font-semibold flex items-center justify-center lg:w-[180px]">
    <span className="mr-2 mt-1">
      {/* App Store Icon */}
      <FontAwesomeIcon icon={faAppStore} className="w-5 h-5" />
    </span>
    App Store
  </button>
  <button className="bg-brown text-white hover:bg-white hover:text-black lg:py-1 lg:px-10 px-6 py-1 rounded-full font-semibold flex h-12 items-center justify-center lg:w-[180px]">
    <span className="mr-2 mt-1">
      {/* Play Store Icon */}
      <FontAwesomeIcon icon={faGooglePlay} className="w-5 h-5" />
    </span>
    Play Store
  </button>
</div>

</div>

    </div>
  );
};

export default OnlineOrderSection;
