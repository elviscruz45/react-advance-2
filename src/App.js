import React from "react"
import {GlobalStyle} from "./styles/GlobalStyles"
import {Logo} from "./components/Logo"
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery"
import { Home } from "./pages/Home"
import {Routes, Route} from "react-router-dom"





const App=()=>{
    const urlParams=new window.URLSearchParams(window.location.search)
    const detailId=urlParams.get("detail")
    return(
        <div>
        <GlobalStyle/>
        <Logo/>
        {
            detailId
            ? <PhotoCardWithQuery id={detailId}/>
            :<Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pet/:id" element={<Home/>}/>
            </Routes> 
        }
        </div>
    )
}

export {App}
