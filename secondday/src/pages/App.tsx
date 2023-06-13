import React from 'react'
//Sayfalar arasında geçiş yaparken üsteki js ve diğer bilgilerin tekrar yüklenmesini engeller
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <>
    <NavLink to={'/'}>App</NavLink> 
    <NavLink to={'/settings'}>Settings</NavLink>
        <div>App</div>
    </>

  )
}

export default App
