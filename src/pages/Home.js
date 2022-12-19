import React from "react"
import {ListOfCategories} from "../components/ListOfCategories"
import {ListOfPhotoCards} from "../components/ListOfPhotoCards"
import {useParams} from "react-router-dom"
import {Layout} from "../components/Layout"


const HomePage = ()=>{
    const {categoryId}=useParams()
    return(
        <Layout title="Tu app de fotos de mascotas" subtitle="Con Instapet puedes encontrar fotos de animales domesticos muy bonitos">
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    )
}

const Home=React.memo(HomePage,(prevProps,props)=>{
    return prevProps.id===props.id
})

export {Home}


