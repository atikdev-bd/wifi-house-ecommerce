import React, { createContext, useEffect, useState } from 'react';



 export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [services, setServices ] = useState([])
    
    useEffect(()=>{

     fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => setServices(data))
       .catch(error =>console.log(error))


    },[])

    ///fetch all data ///
   

    const info ={services}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;