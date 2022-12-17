import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {Context} from "../../Context"
import {Form,Input,Button,Title,Error} from "./styles"
import { useRegisterMutation } from '../../hooks/useRegisterMutation'
import { useLoginMutation } from '../../hooks/useLoginMutation';


const FormLogin = ({title}) => {
  //const [registerMutation] = useMutation(REGISTER)
  const {activateAuth}=useContext(Context)
  const { register, handleSubmit, formState: { errors } } = useForm()


  const  {registerMutation,loading,error}  = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables })  //.then(activateAuth)
}
    const errorMsg = error && 'El usuario ya existe.'


    const {loginMutation,loading: loadingLogin,error: errorLogin,} = useLoginMutation();
    const onLogin = ({ email, password }) => {
        const input = { email, password };
        const variable = { input };
        loginMutation({ variables: variable }).then(activateAuth);
    };
    const errorMsgLogin = errorLogin && 'Ha ocurrido un error al iniciar sesión';


    return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={handleSubmit(title==="Registrarse"?onSubmit:onLogin)}>
        <Input disabled={loading}  type='text' placeholder='User' 
        {...register('email', { required: true })} />

        <Input disabled={loading}  type='password' placeholder='Password'
        {...register('password', { required: true })} />

        {errors.emailRequired && <span>This filed is required</span>}

        <Input disabled={loading}  type='submit' value={title}/>
        <Error> {title==="Registrarse"?errorMsg:errorMsgLogin}</Error>

    </Form>
    <br/>
    <br/>
    </>
    )
}

export {FormLogin}

