import React, { createContext, useEffect, useState } from 'react';



 export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [service, setService ] = useState([])
    console.log(service)

    useEffect(()=>{

     fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => setService(data))
       .catch(error =>console.log(error))


    },[])

    const info ={}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;