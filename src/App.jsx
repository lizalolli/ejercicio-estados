import { useState } from 'react'
import './App.css'
import {Registro} from './components/Registro'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

export const App = () => {
  return (
    <>
      <Registro></Registro>
    </>
  )
}