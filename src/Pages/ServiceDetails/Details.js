import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
 

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data, products);
      });
  }, [id]);

  return (
    <div>
      <h1>{products?.price}</h1>
      <h1>this is details page</h1>
    </div>
  );
};

export default Details;
