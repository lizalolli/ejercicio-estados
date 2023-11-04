import React from 'react'
import { Alert } from 'react-bootstrap';

const MyAlert = ({errorMessage, errorColor}) => {
  return (
    <>
      <Alert variant={errorColor}>
        {errorMessage}
      </Alert>
    </>
  )
}

export default MyAlert;