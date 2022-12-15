import React from "react"
import {Nav,Link} from "./styles"
import {MdHome,MdFavoriteBorder,MdPersonOutline} from "react-icons/md"
import {useLocation} from "react-router-dom"

const size="32px"

const NavBar=()=>{
    const {pathname}=useLocation()

    const setCurrentArea = (path) => {
        return pathname === path ? "area-current" : "" 
      }

    return(
        <Nav>
            <Link className={setCurrentArea('/')}  to="/"><MdHome size={size}/></Link>
            <Link className={setCurrentArea('/favs')} to="/favs"><MdFavoriteBorder size={size}/></Link>
            <Link className={setCurrentArea('/user')} to="/user"><MdPersonOutline size={size}/></Link>
        </Nav>
    )
}


export {NavBar}