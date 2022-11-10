import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "../../Assets/icon/icons8-remove-64.png";

const ReviewRow = ({ rev, handleDelete, handleUpdate }) => {
  const { image, review, serviceName, _id,  } = rev;

  return (
    <tr>
      <th>
        <label>
          <img
            onClick={() => handleDelete(_id)}
            className="w-12 bg-red-50 border p-2 rounded-full shadow-lg hover:bg-blue-400"
            src={DeleteIcon}
            alt=""
          />
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
            <a href="#my-modal-2" className="btn">
             Update
            </a>
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ReviewRow;
