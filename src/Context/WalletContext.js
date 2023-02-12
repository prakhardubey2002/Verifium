import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider=({children})=>{
    const [isAddress,setIsAddress]=useState('user');
    useEffect(() => {
      console.log(isAddress)
    }, [isAddress])
    
    return <AppContext.Provider value={{ isAddress,setIsAddress }} >{children}</AppContext.Provider>
};
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export{AppContext,AppProvider,useGlobalContext};
