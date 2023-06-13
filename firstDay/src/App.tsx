import React, { useEffect, useState } from 'react'
import { cities } from './services/sample'

function App() {

  const name = "Fırat"
  //name = "Vatan"
  var surname = "ALBAYATI"
  surname = "BEYATLI"

  //using state
  //email = getEmail
  //setEmail method
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [arr,setArr] = useState<string[]>(["Çiğ Köfte"]) //<string[]> TS GenericType
  const [title,setTitle] = useState<string|null>()

  //functions
  //arrow
  const fncDataSet = (evt:React.ChangeEvent<HTMLInputElement>) =>{
    const item = evt.target.value
    console.log('surname',surname)
    console.log('item.length',item.length)
    setEmail(item)
  }

  //send fnc
  const sendForm = (evt:React.FormEvent) => {
    evt.preventDefault() //işlem gerçekleştikten sonra bu sayfadan ayrılma http://localhost:3010/?
       console.log(email,password)
  }
      
  //console.log('This Line call') //burası her zaman çalışır, çünkü genel function App() içi

  useEffect(() => {
     console.log('Call') 
  },[]) // [] demek useEffect her hangi bir state'ten etkilenmemeli ve yalnızca ilk defa çalışmalı

  useEffect(() => { 
    console.log(email) 
 },[email]) //elasticsearch için kullanabilir, har har algılar

 useEffect(() => {
  var arrStr:string[] = [...arr] //[...arr] ilk dizi yani ["Çiğ Köfte"] ve biz bunun sonuna push ederek diziye ekleyeceğiz
  arrStr.push("Adana Kebap")
  arrStr.push("Lahmacun")
  arrStr.push("Sütlaç")
  arrStr.push("Çay")
  arrStr.push("Soda")
  setArr(arrStr)

  cities.push(
    {
      name: 'Antalya',
      nufus: 6000000,
      plaka:7,
      status:true
    }
  )

},[])
 
  return (
    <> 

    <div className='row'>
    <div className='col-sm-4'></div>

    <div className='col-sm-4'>
        <h2>Admin Login</h2>
    <form onSubmit={(evt) => sendForm(evt)} >
    <div className='mb-3'>
        <input required onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail' />
        </div>

        <div className='mb-3'>
        <input required onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
        </div>
    
         <button className='btn btn-success' >Send</button>
    </form>
    </div>

    <div className='col-sm-4'></div>
    </div>
      
    { arr && arr.length > 0 &&     
        <ul>
        { arr.map( (item, index) =>
          <li key={index}> {item} </li>
        )}
        </ul>
    }

    { title &&
        <div> {title.length} </div>
    }

     {cities.map((item,index) =>
       <div> {item.name} - {item.nufus} - {item.plaka} - {item.status.toString()}</div>
     )}

    </>
  )
}

export const theme="light"
export const rowCount=50
export default App