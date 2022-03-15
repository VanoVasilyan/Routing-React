import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [list, setList] = useState(data)
    return <AppContext.Provider value={{
        list,
        setList
    }}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }



