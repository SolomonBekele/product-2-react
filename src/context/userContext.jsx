import { createContext, useContext, useState } from "react";


const UserContext = createContext({})

export const useUserContext=()=>{
    return useContext(UserContext);
}
export const UserContextProvider =({children})=>{
    const [authUser,setAuthUser]=useState(null);
    return (
    <UserContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </UserContext.Provider>
    );
}



