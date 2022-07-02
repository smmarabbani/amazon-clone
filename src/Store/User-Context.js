import React, { useState, createContext } from 'react';

const UserContext = createContext({
    user: '',
    userName: '',
    isLoggedIn: false,

    userNameHandler: () => { },
    userHandler: () => { },
    loginHandler: () => { },
    logoutHandler: () => { },
    loginChecker: () => { }
})

export const UserContextProvider = (props) => {
    const [user, setUser] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const userNameHandler = (username) => {
        localStorage.setItem('username', username)
        setUserName(username)
    }

    const userHandler = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify({ name: user.name, id: user._id, email: user.email }))
    }

    const loginHandler = (token) => {
        localStorage.setItem('isLoggedIn', 1)
        localStorage.setItem('accessToken', token)
        setIsLoggedIn(true)
    }

    const loginChecker = () => {
        let loggedIn = localStorage.getItem('isLoggedIn')
        let token = localStorage.getItem('accessToken')
        if (loggedIn || token) {
            if ((loggedIn === null || loggedIn === '0') && token) {
                localStorage.removeItem('isLoggedIn')
                localStorage.removeItem('accessToken')
                localStorage.removeItem('user')
                setIsLoggedIn(false)
                return;
            }
            if (token === '' || token === null) {
                localStorage.removeItem('isLoggedIn')
                localStorage.removeItem('accessToken')
                localStorage.removeItem('user')
                setIsLoggedIn(false)
                return
            }
            if (loggedIn === "1" && (token !== '' || token !== null)) {
                setIsLoggedIn(true)
                return
            }
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        setIsLoggedIn(false)
    }

    return <UserContext.Provider value={{
        user, isLoggedIn, userName, userNameHandler, userHandler, loginHandler,
        logoutHandler, loginChecker
    }}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext