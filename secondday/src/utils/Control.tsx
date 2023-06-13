import React from 'react'
import Navbar from '../components/Navbar';
import {Navigate} from 'react-router-dom'

function Control(item: { component: JSX.Element }) {

  const user = localStorage.getItem("user")
  return (
    <>
    { user != null ? <> {user == "10" &&  <><Navbar/> {item.component}</>}  </> : <Navigate to={'/'} replace />  }
    </>
  )
}

export default Control