import {gql,useMutation} from "@apollo/client"

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`


const useRegisterMutation = ()=> {
    const [registerMutation,{loading, error}] = useMutation(REGISTER)
    return  {registerMutation,loading,error}
}


export {useRegisterMutation,REGISTER}

