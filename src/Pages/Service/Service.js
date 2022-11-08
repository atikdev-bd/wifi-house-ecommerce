import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { serviceName, description, price, image, _id } = service;

  return (
    <PhotoProvider>
      <div className="card lg:card-side bg-base-100 lg:h-[300px]  shadow-xl mb-4">
        <figure>
          <PhotoView src={service?.image}>
            <img
              className=" w-[400px]lg:w-[600px]  lg:h-full"
              src={service.image}
              alt="Album"
            />
          </PhotoView>
        </figure>
        <div className="card-body bg-gradient-to-r from-emerald-600 via-cyan-700 to-zinc-600">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description.slice(0, 100) + "..."}</p>

          <h3 className="text-xl font-bold">Price : {price}</h3>
          <div className="card-actions justify-end">
            <Link to={`/service/${_id}`}>
              <button className="btn glass">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Service;
