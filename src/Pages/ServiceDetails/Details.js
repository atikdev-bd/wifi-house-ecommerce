import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { useParams } from "react-router-dom";
import Review from "../../Assets/review.json";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Details.css";
const Details = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  return (
    <div className="mt-6 mx-6">
      <div>
        <div className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl  image-full">
            <figure>
              <img src={products?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-emerald-600">
                {products?.serviceName}
              </h2>
              <p>{products?.description}</p>

              <p className="text-xl font-bold text-orange-500">
                price : $ {products?.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-2xl  font-semibold text-green-700 mt-8 mb-4">
          Add Your Review
        </h1>
        <div className="review-section lg:flex justify-center">
          <div className="ml-8">
            <Lottie
              className=" w-64  lg:w-96 mr-2"
              animationData={Review}
            ></Lottie>
          </div>
          <div>
            <div className="card flex-shrink-0 w-full bg-gray-700  max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <h1 className="text-xl mb-4 font-semibold text-sky-100">
                    {" "}
                    Service : {products?.serviceName}
                  </h1>

                  <input
                    type="text"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered rounded-sm"
                  />
                </div>

                <textarea
                  className="textarea textarea-primary rounded-sm"
                  placeholder="Add your review"
                ></textarea>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
