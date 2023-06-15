import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from './Store'
import { NoteAction } from './actions/NoteAction'
import { NoteType } from './types/NoteType'
import { Note } from './models/Note'

function Profile() {

    const noteData = useSelector( ( obj: StateType ) => obj.NoteReducer)
  const dispatch = useDispatch()
  const deleteItem = (item: Note) => {
    const delItem: NoteAction = {
        type: NoteType.NOTE_DELETE,
        payload: item
    }
    dispatch(delItem)
  }

   const updateItem = (item:Note) =>{
    const newItem = Object.assign({},item)
    newItem.title = "New Title"
    newItem.detail = "New Detail"
    const updateItem:NoteAction = {
        type: NoteType.NOTE_UPDATE,
        payload: newItem
    }
    dispatch(updateItem)
   }

  return (
    <table className="table">
    <thead>
        <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">Detail</th>
        <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody>
        { noteData.map( (item, index) =>
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.detail}</td>
            <td>
                <button onClick={() => deleteItem(item)} className='btn btn-danger'>Delete</button>
           </td>
            <td>
               <button onClick={() =>  updateItem(item)} className='btn btn-warning'>Update</button>
            </td>
          </tr>  
        )}
    </tbody>
    </table>
  )
}

export default Profile