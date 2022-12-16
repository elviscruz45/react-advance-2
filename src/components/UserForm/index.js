import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {Context} from "../../Context"
import {Form,Input,Button,Title} from "./styles"

const FormLogin = ({title}) => {
  const {activateAuth}=useContext(Context)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => {
    console.log(data)
    activateAuth()
  }

  return (
    <>
    <Title>{title}</Title>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type='text' placeholder='User' 
      {...register('email', { required: true })} />

      <Input type='password' placeholder='Password'
       {...register('password', { required: true })} />

      {errors.emailRequired && <span>This filed is required</span>}

      <Input type='submit' value={title}/>

    </Form>
    </>
  )
}

export {FormLogin}

