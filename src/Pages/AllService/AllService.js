import React, { useEffect, useState } from "react";


import ServiceCart from "../ServiceCart/ServiceCart";

const AllService = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allService")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-8 mx-8">
      {allServices?.map((service) => (
        <ServiceCart key={service._id} service={service}></ServiceCart>
      ))}
    </div>
  );
};

export default AllService;
