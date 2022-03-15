import React, { useContext } from "react";
import data from "./data";

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const getAllUsers = () => data
    const getUserById = (id) => {
        const findedItem = data.find(item => item.id === Number(id))
        return findedItem
    }
    return <AppContext.Provider value={{
        getAllUsers,
        getUserById
    }}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }



