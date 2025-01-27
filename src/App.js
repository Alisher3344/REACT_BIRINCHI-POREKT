import React, { Fragment } from 'react'
import { Header } from './Components/Header'
import { Nav } from './Components/Nav'
import { About } from './Components/About'
import { Servise } from './Components/Servise'
import { Blue } from './Components/Blue'
import { Article } from './Components/Article'
import { Footer } from './Components/Footer'
const App = () => {
  return ( 
    <Fragment>
      <Nav/>
    <Header/>
    <About/>
    <Servise/>
    <Blue/>
    <Article/>
    <Footer/>
    </Fragment>
  )
}

export default App