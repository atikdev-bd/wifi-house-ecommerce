import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
  const { services } = useContext(AuthContext);
  console.log(services);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>

      <h1>Our services</h1>

      <div className="grid lg:grid-cols-1 gap-4 mx-8  mt-14 ">
        {" "}
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
     <div className="flex justify-center">
     <Link to='/allService'><button className="btn no-animation hover:bg-stone-500">Show All</button></Link>
     </div>
    </div>
  );
};

export default Home;
