import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const UpdateReview = () => {
  const { reviews,newReview } = useContext(AuthContext);

  const { id } = useParams();
  console.log(reviews);

  const update = reviews.find((rev) => rev._id === id);

  const currentUpdate = (e) => {
    e.preventDefault();
    const value = e.target.review.value;
    const updateReview = {
      review : value 
    }
    newReview(updateReview)
    e.target.reset()
  };
    
  return (
    <>
      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Now change your previous review !
          </h3>
          <form onSubmit={currentUpdate}>
            <textarea
              name="review"
              className="textarea textarea-bordered rounded-sm"
              placeholder="write your review"
            ></textarea>
            <br />
            <button className="btn btn-ghost text-end" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-primary m-8 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">ServiceName : {update?.serviceName}</h2>
            <p>Current Review : {update?.review}</p>
            <div className="card-actions justify-end">
              <label htmlFor="my-modal-3" className="btn">
                Edit
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReview;
