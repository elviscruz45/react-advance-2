import React from "react"
import {Helmet} from "react-helmet"
import {Div,Title,Subtitle} from "./styles"

const Layout=({children,title,subtitle})=>{
    return(
        <>
        <Helmet>
        {title &&<title>{title} | InstaPet :) </title>}
        {subtitle && <meta name="description" content={subtitle}/>}
        </Helmet>
        <Div>
            {title &&<Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {children}
        </Div>
        </>
    )
}

export {Layout} 