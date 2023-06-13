import React from 'react'
import '../App.css'

//sen çalışmadan önce sana bir item gelecek ve bu item bir fnc olacak ve tipi React.MouseEventHandler<HTMLButtonElement>
function SendButton(item: {
    btnSendFnc:React.MouseEventHandler<HTMLButtonElement>,
    title?: string
   } ) { 

  const fncSend = () =>{
    console.log("fncSend Call")
  }

  return (
    <button className='btn btn-danger btnSave' style={{marginBottom: 10}} onClick={item.btnSendFnc}>
        {item.title != null ? item.title : "Save"}
    </button>
  )
}

export default SendButton