import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button}  from 'react-bootstrap'
import { MyAlert } from './MyAlert'

export const MyForm = ({setErrors}) => {  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submitButton, confirmSubmitButton] = useState("")
  // const [dataInput, setDataInput] = useState({
  // name: '',
  // email: '',
  // })


  //const onChangeInput = (e) => {
    //setDataINput es un objeto
    //En un solo estado
    // setDataInput({
    //   ...dataInput,
    //   [e.target.name]: e.target.value,
    //   //este name se refiere a la declaración name="email" y name="name"
    // })
  //}  

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  //valida que el mail esté en el formato correcto y que las passwords sean iguales
  const onSubmit = (e) => {
    e.preventDefault();
 
    if (name.trim() === '' ){
      setErrors({
        error: 'El campo "nombre" no puede estar vacío 😞',
        color: 'danger'
      })
    } else
  
    // if (password === confirmPassword && password.length && name.length && email.length){
    //   setErrors({
    //     error: '¡Te has registrado exitosamente! 😄',
    //     color: 'success'
    //   })
    // } else

    if (!password.length){
      setErrors({
        error: 'La contraseña no puede estar vacía 😠',
        color: 'danger'
      })
    } else

    // if (password === confirm){

    if (password !== confirmPassword) {
      setErrors({
        error: 'Las contraseñas no coinciden 😞',
        color: 'danger'
      })
    } else {
      setErrors({
        error: '¡Te has registrado exitosamente! 😄',
        color: 'success'
      });
    }
  }
 
  return (
    <>
      <div className='container'>
        <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="formBasicName">
            {/* Name */}
            <Form.Control 
            type="text" 
            // name="name" así cuando es con sólo un estado
            name={name}
            placeholder="Tu nombre aquí" 
            onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* Email */}
            <Form.Control 
            type="email" 
            // name="email" así cuando es con sólo un estado
            name={email}
            placeholder="ejemplo@email.com"
            onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* Password */}
            <Form.Control 
            type="password" 
            placeholder="Contraseña" 
            onChange={onChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          {/* Confirm Password */}
            <Form.Control 
            type="password" 
            placeholder="Confirma la contraseña" 
            onChange={onChangeConfirmPassword}
            />
          </Form.Group>
          <div className="d-grid gap-2 col-12 mx-auto">
            <Button 
            variant="success" 
            type="submit"  
            >
              Registrarse
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
};
