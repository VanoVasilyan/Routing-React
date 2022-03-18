import React, { useContext } from "react";
import data from "./data";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const getUserById = (id) => {
        const currentPerson = data.find(item => item.id === Number(id))
        return currentPerson
    }
    
    return <AppContext.Provider value={{
        data,
        getUserById
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }