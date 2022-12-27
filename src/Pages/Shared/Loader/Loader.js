import React, { useState } from "react";
// import RingLoader from "react-spinners/RingLoader";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="items-center flex justify-center ">
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
