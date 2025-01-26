import React, { Fragment } from 'react'
import { Header } from './Components/Header'
import { Nav } from './Components/Nav'
import { About } from './Components/About'
import { Servise } from './Components/Servise'
import { Blue } from './Components/Blue'

const App = () => {
  return (
    <Fragment>
      <Nav/>
    <Header/>
    <About/>
    <Servise/>
    <Blue/>
    </Fragment>
  )
}

export default App