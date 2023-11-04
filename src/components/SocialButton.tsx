import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const SocialButton = ({ icon }) => {

  return (
    <button className='p-3 border border-black rounded-circle mx-1 text-black bg-white'>
      <FontAwesomeIcon icon={icon} size="2x"/>
    </button>
  )
}
