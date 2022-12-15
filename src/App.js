import React from "react"
import {GlobalStyle} from "./styles/GlobalStyles"
import {Logo} from "./components/Logo"
import { Home } from "./pages/Home"
import {Routes, Route,Navigate} from "react-router-dom"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar"

import { Favs } from "./pages/Favs" 
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"

const userLogged=true;

const App=()=>{

    return(
        <div>
        <GlobalStyle/>
        <Logo/>
        <Routes>
            <Route path="/" element={userLogged?<Home/>:<Navigate to='/login' />}/>
            <Route path="/pet/:categoryId" element={<Home/>}/>
            <Route path="/detail/:detailId" element={<Detail/>}/>
            <Route path="/favs" element={userLogged?<Favs/>:<Navigate to='/login'/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path='/login' element={<NotRegisteredUser />} />

        </Routes>
        <NavBar/>
        </div>
    )
}

export {App}
