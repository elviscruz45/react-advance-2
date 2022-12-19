import React ,{useEffect,useRef,useState} from "react"
import {ImgWrapper,Img,Button,Article} from "./styles"
import {MdFavoriteBorder,MdFavorite} from "react-icons/md"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNearScreen } from "../../hooks/useNearScreen"
import { FavButton } from "../FavButton"
import { ToogleLikeMutation } from "../../containers/ToggleLikeMutation"
import {Link} from "react-router-dom"
import { useMutationToggleLike } from "../../hooks/useMutationToggleLike"
import PropTypes from "prop-types"


const DEFAULT_IMAGE="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



const PhotoCard=({id,likes=0,src=DEFAULT_IMAGE})=>{
    const [show,element]=useNearScreen()
    const key=`like-${id}`
    const [liked,setLiked]=useLocalStorage(key,false)
    const [likePhoto, {data, loading, error}] = ToogleLikeMutation({liked,id,likes})
    const {mutation}=useMutationToggleLike()
    const Icon=liked?MdFavorite:MdFavoriteBorder


    const handleFavClick=()=>{
        mutation({
            variables:{
                input:{id}
            }
        })
        setLiked(!liked)
    }

    // const handleFavClick=async ()=>{
    //     await likePhoto({variables:{input:{id:id}}})
    //     setLiked(!liked)
    // }

    if (error) return <div>Error!</div>
    if (loading) return <div> We are sending your submit</div>
    return (
        <Article ref={element}>
        {
            show && <>
                <Link to={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
                </Link>
                <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
            </>
}
        </Article>
    )
}

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
      const propValue = props[propName]
  
      if (propValue === undefined) {
        return new Error(`${propName} value must be defined`)
      }
      if (propValue < 0) {
        return new Error(`${propName} value must be greater than 0`)
      }
    }
  }


export {PhotoCard}

