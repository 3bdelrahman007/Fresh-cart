import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({children}){
    const [token, setToken] = useState(localStorage.getItem('token'))
    useEffect(() => {
        token ? localStorage.setItem('token' , token) : localStorage.removeItem('token')
    }, [token])
    return(
        <userContext.Provider value={{token, setToken}}>
            {children}
        </userContext.Provider>
    )
}