import React, {useEffect, useState} from "react"
import {Category} from "../Category"
import {List,Item} from "./styles"


function useCategoriesData(){
    const [categories,setCategories]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(function(){
        setLoading(true) // to start loading the fetch
        fetch("https://petgram-server-elviscruz45.vercel.app/categories")
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
            setLoading(false) // when the calling end
        })
    },[])
    return {categories,loading}
}


const ListOfCategories=()=>{
    const {categories,loading}=useCategoriesData()
    const [showFixed,setShowFixed]=useState(false)

    useEffect(function(){
        const onScroll=e=>{
            const newShowFixed=window.scrollY>200
            showFixed!==newShowFixed&& setShowFixed(newShowFixed)
        }
        document.addEventListener("scroll",onScroll)
        return () => document.removeEventListener("scroll",onScroll)

    },[showFixed])

    const renderList=(fixed)=>(
        <List fixed={fixed}>
            {
                loading
                ?<Item key="loading">Please,wait...<br/><br/><br/></Item>
                :categories.map(category=>
                <Item key={category.id}>
                    <Category {...category} path={`/pet/${category.id}`}/>
                </Item>)
            }
        </List>
    )



    return(
        <>
        {renderList()}
        {showFixed&&renderList(true)}
        </>
    )
}

export {ListOfCategories}