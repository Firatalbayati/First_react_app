import { useDispatch, useSelector } from 'react-redux'
import { StateType } from './Store'
import { NoteAction } from './actions/NoteAction'
import { NoteType } from './types/NoteType'
import { Note } from './models/Note'
import { Helmet } from 'react-helmet'

function Profile() {

    const noteData = useSelector((obj: StateType) => obj.NoteReducer);
    const dispatch = useDispatch();
    const deleteItem = (item: Note) => {
        const delItem: NoteAction = {
            type: NoteType.NOTE_DELETE,
            payload: item
        }
        dispatch(delItem)
    }

    const updateItem=(item:Note)=>{
         const newItem= Object.assign({},item);
         newItem.title='Yeni Title';
         newItem.detail='Yeni Detail';

         const updateItm:NoteAction={
            type:NoteType.NOTE_UPDATE,
            payload:newItem
         }

         dispatch(updateItm);
    }

    return (

      <>
     <Helmet>
      <title>App Page</title>
      <meta name='description' content='Profile application' ></meta>
     </Helmet>
     <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                </tr>
            </thead>
            <tbody>
                {noteData.map((item, index) =>
                    <tr key={index}>
                        <th scope="row">{item.id.toString()}</th>
                        <td>{item.title}</td>
                        <td>{item.detail}</td>
                        <td>
                            <button onClick={() => deleteItem(item)} className='btn btn-danger'>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => updateItem(item)} className='btn btn-warning'>Update</button>
                        </td>
                    </tr>
                )}


            </tbody>
        </table>
      </>
       
    )
}

export default Profile