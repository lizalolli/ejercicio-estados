import {React, Fragment, useState} from 'react'
import { MyForm }  from './MyForm'
import MyAlert from './MyAlert'
import { SocialButton } from './SocialButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Registro = () => {
  //mandamos este useState como props a MyForm
  const [errors, setErrors] = useState({
    error: '',
    color: ''
  })
  return (
    <div className='bg-white p-5 rounded-5'>
      <h1>Crea una cuenta</h1>
      <div className='d-flex flex-row justify-content-center my-3'>
        <SocialButton icon="fa-brands fa-facebook"/>
        <SocialButton icon="fa-brands fa-github" />
        <SocialButton icon="fa-brands fa-linkedin-in" />
      </div>
      <p>o usa tu mail para registrarte</p>
        <MyForm
          setErrors={setErrors}
        ></MyForm>
      <div className='container mt-2'>
        {errors.error!= '' && (<MyAlert errorMessage={errors.error} errorColor={errors.color}
          ></MyAlert>)}
      </div>
    </div>
  )
}




