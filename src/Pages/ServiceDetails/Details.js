import { useLoaderData } from 'react-router-dom';
const Details = () => {

   
    const data = useLoaderData()
    console.log(data)
  
    

    return (
        <div>
            <h1>{data?.price}</h1>
            <h1>this is details page</h1>
        </div>
    );
};

export default Details;