import React from "react"
import {ListOfCategories} from "../components/ListOfCategories"
import {ListOfPhotoCards} from "../components/ListOfPhotoCards"
import {useParams} from "react-router-dom"
const Home = ()=>{
    const {categoryId}=useParams()
    return(
        <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={categoryId} />

        </>
    )
}

export {Home}


