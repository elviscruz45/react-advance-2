import React from "react"
import {ListOfCategories} from "./components/ListOfCategories"
import {GlobalStyle} from "./styles/GlobalStyles"
import {ListOfPhotoCards} from "./components/ListOfPhotoCards"
import {Logo} from "./components/Logo"

const App=()=>(
    <div>
    <GlobalStyle/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards categoryId={1}/>
    </div>
    )


export {App}

