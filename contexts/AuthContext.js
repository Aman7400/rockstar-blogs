import React from 'react'

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn,setIsloggedIn] = React.useState(false);
    const handleLogin = () => {
        setIsloggedIn(true);
    }
    const handleLogout = () => {
        setIsloggedIn(false);
    }
    return (
        <AuthContext.Provider value={{isLoggedIn,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}