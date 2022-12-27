import React, { useContext, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import UpdateIcon from "../../Assets/icon/icons8-available-updates-50.png";
import DeleteIcon from "../../Assets/icon/icons8-trash-50.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../UseTitle/UseTitle";
import ReviewRow from "../ReviewRow/ReviewRow";
import Loader from "../Shared/Loader/Loader";

const Review = () => {
  const { user, logOut, loading, setReviews, updateReview } =
    useContext(AuthContext);
  console.log(updateReview);
  const [review, setReview] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  useTitle("Review");

  useEffect(() => {
    setDataLoading(true);
    fetch(
      `https://brod-brand-server-side.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          logOut();
          toast.error("Unauthorized Access");
        }
        return res.json();
      })
      .then((data) => {
        setReview(data);
        setReviews(data);
        setDataLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure you delete this review");
    if (proceed) {
      fetch(`https://brod-brand-server-side.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Delete Successfully");
            const remainingReview = review.filter((data) => data?._id !== id);

            setReview(remainingReview);
          }
        });
    }
  };
  const handleUpdate = (id) => {
    fetch(`https://brod-brand-server-side.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = review.filter((rev) => rev._id !== id);
          const update = review.find((rev) => rev._id === id);
          const one = update.review;
          console.log(one); // = "Approved"; //thats
          const newReview = [...remaining, update];
          setReview(newReview);
        }
      });
  };

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      {review.length ? (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <img src={DeleteIcon} alt="" />
                  </th>
                  <th>Service Photo</th>
                  <th>Service Name</th>
                  <th>Customer Review</th>
                  <th>
                    {" "}
                    <img className="ml-5" src={UpdateIcon} alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {review.map((rev) => (
                  <ReviewRow
                    key={rev._id}
                    rev={rev}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  ></ReviewRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          No reviews were added{" "}
          <button className="btn btn-link">
            <Link to="/">Go home page and click details</Link>
          </button>{" "}
        </h1>
      )}
      <Toaster></Toaster>
    </div>
  );
};

export default Review;
