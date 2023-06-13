import React from 'react'
import { NavLink } from 'react-router-dom'

function Settings() {
  return (
    <>
    <NavLink to={'/'}>App</NavLink>
    <NavLink to={'/settings'}>Settings</NavLink>
      <div>Settings</div>
    </>
  )
}

export default Settings