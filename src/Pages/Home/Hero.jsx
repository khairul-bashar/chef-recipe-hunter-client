import React from "react";
import dessert from '../../../public/images/dessert.png';
import drink from '../../../public/images/poinsettia.png';
import food from '../../../public/images/restaurant.png';
const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/my-image.png')] bg-cover bg-center bg-no-repeat h-screen text-info flex items-center relative">
        <div className="w-[500px] text-center">
          <h2 className="text-3xl font-semibold">Cheerful Restaurants</h2>
          <p className="text-xl font-medium my-6">
            Step into vibrant and cheerful restaurant, where delectable dishes,
            joyful laughter, and lively atmosphere come together
          </p>
          <button className="btn btn-outline text-info capitalize btn-sm rounded-full">
            Order
          </button>
          <button className="btn btn-warning btn-sm text-info capitalize rounded-full ms-3 px-7 ">
            Visit
          </button>
        </div>
        <div className="flex gap-3 bg-white px-5 py-1 rounded-md absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
          <img className="w-10 h-10" src={drink} alt="" />
          <img className="w-10 h-10" src={dessert} alt="" />
          <img className="w-10 h-10" src={food} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
