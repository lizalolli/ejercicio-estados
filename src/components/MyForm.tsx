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
        error: 'el campo "nombre" no puede estar vacío',
        color: 'danger'
      })
    } else

    if (password === confirmPassword && password != '' && confirmPassword != ''){
      setErrors({
        error: 'la password está bien',
        color: 'success'
      })
    } else

    // if (password === '' || confirmPassword ==='' ){
    //   setErrors({
    //     error: 'el campo "password" no puede estar vacío',
    //     color: 'danger'
    //   })
    // }

    // if (password === confirm){

    // } else

    if (password != confirmPassword) {
      setErrors({
        error: 'las passwords no coinciden',
        color: 'danger'
      })
    }
  }
 
  return (
    <>
      <div className='container'>
        <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* Name */}
            <Form.Control 
            type="text" 
            // name="name" así cuando es con sólo un estado
            name={name}
            placeholder="Enter Name" 
            onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* Email */}
            <Form.Control 
            type="email" 
            // name="email" así cuando es con sólo un estado
            name={email}
            placeholder="Enter email"
            onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* Password */}
            <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={onChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* Confirm Password */}
            <Form.Control 
            type="password" 
            placeholder="Confirm Password" 
            />
          </Form.Group>
          <Button 
          variant="primary" 
          type="submit"  
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
};
