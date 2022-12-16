import React,{useContext} from "react"
import {GlobalStyle} from "./styles/GlobalStyles"
import {Logo} from "./components/Logo"
import { Home } from "./pages/Home"
import {Routes, Route,Navigate} from "react-router-dom"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"

import { Favs } from "./pages/Favs" 
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { Context } from "./Context"

const userLogged=true;
const  urlParams = new window.URLSearchParams(window.location.search)
const detailId = urlParams.get('detail')

const App=()=>{
    const { isAuth } = useContext(Context)

    return(
        <div>
        <GlobalStyle/>
        <Logo/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pet/:categoryId" element={<Home/>}/>
            <Route path="/detail/:detailId" element={<Detail/>}/>
            <Route path="/favs" element={isAuth?<Favs/>:<NotRegisteredUser />}/>
            <Route path="/user" element={isAuth?<User/>:<NotRegisteredUser />}/>
        </Routes>
        <NavBar/>
        </div>
    )
}

export {App}

