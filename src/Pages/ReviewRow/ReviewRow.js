import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ rev, handleDelete, handleUpdate }) => {
  const { image, review, serviceName, _id } = rev;

  return (
    <tr>
      <th>
        <label className="w-10">
          <h1 onClick={() => handleDelete(_id)} className="text-sm  bg-red-300 p-2 rounded-lg hover:bg-red-500 w-16">
            Delete
          </h1>
          {/* <img
            onClick={() => handleDelete(_id)}
            className="w-20 lg:w-12 bg-red-50 border p-2 rounded-full shadow-lg hover:bg-blue-400"
            src={DeleteIcon}
            alt=""
          /> */}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </td>
      <td>{serviceName}</td>
      <td>{review}</td>
      <th>
        <Link to={`/edit/${_id}`}>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost bg-green-400 btn-xs"
          >
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewRow;
