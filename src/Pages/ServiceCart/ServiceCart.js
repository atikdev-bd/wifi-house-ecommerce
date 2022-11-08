import React from 'react';

const ServiceCart = ({service}) => {
    console.log(service)

    const {serviceName, description, price, image} = service
    return (
        <div>
            <div className="card lg:card-side bg-base-100 lg:h-[300px]  shadow-xl mb-4">
      <figure>
        <img
          className="lg:w-[600px]  lg:h-full"
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body bg-gradient-to-r from-emerald-600 via-cyan-700 to-zinc-600">
        <h2 className="card-title">{serviceName}</h2>
        <p>{description.slice(0,100) + '...'}</p>

        <h3 className="text-xl font-bold">Price : {price}</h3>
        <div className="card-actions justify-end">
          <button className="btn glass">Details</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ServiceCart;