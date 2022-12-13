import React from "react"
import {PhotoCard} from "../PhotoCard"


const ListOfPhotoCards=()=>{
    return (
        <ul>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(id=><PhotoCard key={id} id={id}/>)}
        </ul>
    )
}


export {ListOfPhotoCards}