import React from "react"
import { PhotoCardWithQuery } from "../containers/PhotoCardWithQuery"
import {useParams} from "react-router-dom"

const Detail=()=>{
    const {detailId}=useParams()

    return <PhotoCardWithQuery id={detailId}/>
}

export {Detail}