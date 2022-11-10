import React from "react";
import { useParams } from "react-router-dom";

const UpdateReview = () => {
  const id = useParams();
  console.log(id);
  return (
    <>
      {/* The button to open modal */}
      <a href="#my-modal-2" className="btn">
        open modal
      </a>
      {/* <p>{/<em> Put this part before </body> tag </em>/}</p> */}
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReview;
