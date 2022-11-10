import React from "react";
import img1 from "../../Assets/aboutImg/icons8-customer-support-80.png";
import img2 from "../../Assets/aboutImg/icons8-hot-price-64.png";
import img3 from "../../Assets/aboutImg/icons8-service-58 (1).png";

const About = () => {
  return (
    <div>
      <h1 className="text-center service text-xl mt-20 text-gray-900 font-bold">Why you should take our service .</h1>
      <div className="flex justify-evenly mt-8  ">
        <div>
          <div className="item-center text-center">
            <img
              className="w-20 ml-6 lg:ml-12  bg-gray-500 hover:bg-emerald-500 p-4 rounded-full"
              src={img1}
              alt=""
            />
            <h1 className="text-sm lg:text-xl mt-4 font-family font-bold">Customer Support</h1>
           
          </div>
        </div>
        <div>
          <img
            className="w-20 ml-12 lg:ml-20 bg-emerald-500  hover:bg-gray-500 p-4 rounded-full"
            src={img2}
            alt=""
          />
          <div className="item-center text-center">
            <h1 className="lg:text-xl font-family mt-4 ml-4 font-bold">Our Service Discount</h1>
           
          </div>
        </div>
        <div>
          <img
            className="w-20 ml-8 lg:ml-12 bg-gray-500 hover:bg-emerald-500  p-4 rounded-full"
            src={img3}
            alt=""
          />
          <div className="item-center text-center">
            <h1 className="lg:text-xl font-family mt-4 font-bold">Our Service Review</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
