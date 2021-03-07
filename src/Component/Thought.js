import React, { useEffect, useState } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa'
import AddThoughtForm from './addThoughtForm';


const Thought = ({ dariApp, hapus, updateList }) => {
  const [edit, setEdit] = useState({
    id: null,
    num: 0,
    text: ''
  })

  const [ completed, setCompleted ] = useState(false)


  const submitUpdate = text => {
    updateList(edit.id, text)
  }

  const handleRemoveClick = () => {
    hapus(dariApp.id);
  };

  if (edit.text) {
    return  <AddThoughtForm edit={edit} tambah={submitUpdate}/>
  }

  //const timeRemaining = dariApp.expiresAt - Date.now();

  // useEffect(() => {

  // const time = setTimeout(() => {
  //   alert('line will deleted')
  //   hapus(dariApp.id)
  //   }, timeRemaining)

  // return () => {
  //   clearTimeout(time)
  // }
  // }, [dariApp , hapus, timeRemaining])


  return (
    <li className={completed ? ' Thought completed ' : ' Thought'} >
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
<FaTimes/>
      </button>
      <button
        aria-label="Remove thought"
        className="edit-button"
        onClick={() => setEdit({ id: dariApp.id, num: dariApp.num, text: dariApp.text })}
      >
        <FaEdit/>
      </button>

      <div className="text"  onClick={() => setCompleted(!completed ? true : false)}> 
       <span className='num'>{dariApp.num}</span>. {dariApp.text}
       </div>

    </li>
  );
}

export default Thought