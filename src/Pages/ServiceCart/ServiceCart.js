import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceCart = ({ service }) => {
  const { loading } = useContext(AuthContext);
  const { serviceName, description, price, image, _id } = service;
  return (
    <div>
      {!service?._id ? (
        <>
          <h1 className="text-black text-4xl text-center">{loading}</h1>
        </>
      ) : (
        <>
          <PhotoProvider>
            <div>
              <div className="card lg:card-side bg-base-100 lg:h-[300px]  shadow-xl mb-4">
                <figure>
                  <PhotoView src={image}>
                    <img
                      className="lg:w-[600px]  lg:h-full"
                      src={image}
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
                      {" "}
                      <button className="btn glass">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </PhotoProvider>
        </>
      )}
    </div>
  );
};

export default ServiceCart;
