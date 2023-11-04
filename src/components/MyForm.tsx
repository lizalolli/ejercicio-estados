import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button}  from 'react-bootstrap'

export const MyForm = ({setErrors}) => {  
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // const initial = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // };

  const [initial, setInitial] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeInput = (e) => {
    // setInitial es un objeto
    // En un solo estado
    setInitial({
      ...initial,
      [e.target.name]: e.target.value,
      //este name se refiere a la declaración name='email' y name='name', etc
    })
  }  

  // const onChangeName = (e) => {
  //   setName(e.target.value)
  // }
  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const onChangeConfirmPassword = (e) => {
  //   setConfirmPassword(e.target.value)
  // }

  //valida que el mail esté en el formato correcto y que las passwords sean iguales
  const onSubmit = (e) => {
    e.preventDefault();
 
    if (initial.name.trim() === '' ){
      setErrors({
        error: 'El campo "nombre" no puede estar vacío 😞',
        color: 'danger'
      })
    } else
    if (!initial.password.length){
      setErrors({
        error: 'La contraseña no puede estar vacía 😠',
        color: 'danger'
      })
    } else
    if (initial.password !== initial.confirmPassword) {
      setErrors({
        error: 'Las contraseñas no coinciden 😞',
        color: 'danger'
      })
    } else {
      setErrors({
        error: '¡Te has registrado exitosamente! 😄',
        color: 'success'
      });
      setInitial({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }
 
  return (
    <>
      <div className='container'>
        <Form onSubmit={onSubmit}>

          <Form.Group className='mb-3' controlId='formBasicName'>
            {/* Name */}
            <Form.Control 
            type='text' 
            // name='name' así cuando es con sólo un estado
            name='name'
            value={initial.name}
            placeholder='Tu nombre aquí' 
            onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            {/* Email */}
            <Form.Control 
            type='email' 
            name='email'
            // name='email' así cuando es con sólo un estado
            value={initial.email}
            placeholder='ejemplo@email.com'
            onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            {/* Password */}
            <Form.Control 
            type='password' 
            name='password'
            value={initial.password}
            placeholder='Contraseña' 
            onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPasswordConfirm'>
          {/* Confirm Password */}
            <Form.Control 
            type='password' 
            name='confirmPassword'
            value={initial.confirmPassword}
            placeholder='Confirma la contraseña' 
            onChange={onChangeInput}
            />
          </Form.Group>
          <div className='d-grid gap-2 col-12 mx-auto'>
            <Button 
            variant='success' 
            type='submit'  
            >
              Registrarse
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
};
