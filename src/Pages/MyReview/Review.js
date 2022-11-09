import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateIcon from "../../Assets/icon/icons8-available-updates-50.png";
import DeleteIcon from "../../Assets/icon/icons8-trash-50.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewRow from "../ReviewRow/ReviewRow";

const Review = () => {
  const { user } = useContext(AuthContext);

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure you delete this review");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
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
    fetch(`http://localhost:5000/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount > 0) {
          const remaining = review.filter((rev) => rev._id !== id);
          const update = review.find((rev) => rev._id === id);
          update.status = "Approved";
          const newReview = [...remaining, update];
          setReview(newReview);
        }
      });
  };

  return (
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
              <img src={UpdateIcon} alt="" />
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
  );
};

export default Review;
