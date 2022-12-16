import React, {useContext} from "react"
import { Context } from "../Context"

const NotRegisteredUser=()=>{

    const {activateAuth,isAuth}=useContext(Context)
    return<>  
    <form onSubmit={activateAuth}>
        <button>
            Iniciar Session
        </button>
    </form>
    </>
}

export {NotRegisteredUser}
