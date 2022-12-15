import React from "react"
import { PhotoCard } from "../components/PhotoCard"
import { useGetSinglePhoto } from '../hooks/useGetPhoto'



const PhotoCardWithQuery=({id})=>{
    const {loading,data,error}=useGetSinglePhoto(id)

    if(loading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>

    const {photo={}}=data

    return <PhotoCard {...photo}/>
}

export {PhotoCardWithQuery}

