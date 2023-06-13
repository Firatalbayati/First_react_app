import React, { useEffect, useState } from 'react'
import { cities } from './services/sample'
import Navbar from './components/Navbar'
import Login from './components/Login'

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
 
 const customFncSave = () => {
 console.log("customFncSave")
}

const [search,setSearch] = useState('')

  return (
    <> 

    <Navbar setSearch={setSearch}/>
    <Login 
    customFncSave={customFncSave}
    sendForm={sendForm} 
    setEmail={setEmail} 
    setPassword={setPassword}/>
   
      
      <h2>{search}</h2>

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