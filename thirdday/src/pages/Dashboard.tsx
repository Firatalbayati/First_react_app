import { useFormik } from 'formik'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

function Dashboard() {

  const validationSchema = Yup.object({
    title: Yup.string().required("Title Empty!").min(3,'Title Min 3').max(75,'Title Max 75'),
    price: Yup.number().required("Price Empty!").min(1,'price Min 1').max(100000,'price Max 100000'),
    detail: Yup.number().required("Detail Empty!")
  })

  const {handleSubmit,handleChange,values,errors} = useFormik({
    initialValues:{
        title:'',
        price: 0,
        detail:''
    },
    validationSchema: validationSchema,
    onSubmit:values =>{
        console.log(values)
    }
  })


  const  errorToast = (message: string) : string => {
    toast.error(message , {toastId: message})
    return ''
  }
  

  return (
    <div className='row'>

        <div className='col-sm-6'>
          <h2>Product Add</h2>


          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                {errors.title && errorToast(errors.title)}
                <input name='title' onChange={handleChange} className='form-control' placeholder='Title'></input>
            </div>
            <div className='mb-3'>
                {errors.price && errorToast(errors.price)}
                <input name='price' onChange={handleChange} type='number' className='form-control' placeholder='Price'></input>
            </div>
            <div className='mb-3'>
                {errors.detail && errorToast(errors.detail)} 
                <input name='detail' onChange={handleChange} className='form-control' placeholder='Detail'></input>
            </div>
            <button className='btn btn-success'>Send</button>
          </form>
        </div>
        <div className='col-sm-6'>
          <h2>Product List</h2>
        </div>
    </div>
  )
}

export default Dashboard