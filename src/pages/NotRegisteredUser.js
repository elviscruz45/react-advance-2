import React, {useContext} from "react"
import { Context } from "../Context"
import { FormLogin } from "../components/UserForm"

const NotRegisteredUser=()=>{

    const {activateAuth,isAuth}=useContext(Context)
    return <>
    <FormLogin title="Registrarse"/>
    <FormLogin title="Iniciar Sesion"/>

    </>
}

export {NotRegisteredUser}
