import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";
import { Link, useLocation, useParams } from "react-router-dom";
import Review from "../../Assets/review.json";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Details.css";
const Details = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const url = `https://brod-brand-server-side.vercel.app/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const reviews = {
      
      email: user?.email,
      image: products?.image,
      serviceName: products?.serviceName,
      review: data.review,
    };
  

    fetch("https://brod-brand-server-side.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

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
             
            </div>
          </div>
        </div>
        <h1 className="text-center text-2xl  font-semibold text-green-700 mt-8 mb-4">
          Add Your Review
        </h1>
        <div className="review-section lg:flex justify-center">
          <div className="ml-8">
            <Lottie
              className=" w-64 mt-6 lg:mt-0  lg:w-96 mr-2"
              animationData={Review}
            ></Lottie>
          </div>
          <div>
            {user?.uid ? (
              <>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card flex-shrink-0 w-full mt-4 lg:mt-0  bg-gray-700  max-w-sm shadow-2xl"
                >
                  <div className="card-body">
                    <div className="form-control">
                      <h1 className="text-xl  font-semibold text-sky-100">
                        {" "}
                        Service : {products?.serviceName}
                      </h1>
                      <p className="text-white my-2">Id : {id}</p>

                      <input
                        {...register("email")}
                        type="text"
                        name="email"
                        readOnly
                        defaultValue={user?.email}
                        placeholder="email"
                        className="input input-bordered rounded-sm"
                      />
                      <input
                        {...register("serviceName")}
                        type="text"
                        name="serviceName"
                        defaultValue={products?.serviceName}
                        readOnly
                        placeholder="serviceName"
                        className="input input-bordered mt-2 rounded-sm"
                      />
                      <input
                        {...register("image")}
                        type="text"
                        defaultValue={products?.image}
                        readOnly
                        name="image"
                        placeholder="photo URL"
                        className="input mt-2 input-bordered rounded-sm"
                      />
                    </div>

                    <textarea
                      {...register("review")}
                      className="textarea textarea-primary rounded-sm"
                      placeholder="Add your review"
                      name="review"
                    ></textarea>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Add</button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <button className="btn  link">
                  <Link to="/login"> please login first and add a review</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
