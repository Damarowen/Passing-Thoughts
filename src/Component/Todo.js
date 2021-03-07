import React, { useState, useEffect } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa'
import AddThoughtForm from './TodoForm';


const Thought = ({ dariApp, hapus, updateList }) => {

  const [seconds, setSeconds] = useState(15)
 
  useEffect(() => {
    const time = setTimeout(() => {
      console.log('line will deleted')
    }, 15000)

    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds  === 0) {
        hapus(dariApp.id)
      console.log('line will deleted')
      }
     
    }, 1000)
    return () => {
      clearInterval(myInterval);
      clearTimeout(time)
    };



  })


  const [completed, setCompleted] = useState(false)

  const [edit, setEdit] = useState({
    id: null,
    num: 0,
    text: ''
  })

  const submitUpdate = text => {
    updateList(edit.id, text)

  }

  const handleRemoveClick = () => {
    hapus(dariApp.id);
  };

  if (edit.text) {
    return <AddThoughtForm edit={edit} tambah={submitUpdate} />
  }





  return (
    <li className={completed ? ' Thought completed ' : ' Thought'} >
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        <FaTimes />
      </button>
      <button
        aria-label="Remove thought"
        className="edit-button"
        onClick={() => setEdit({ id: dariApp.id, num: dariApp.num, text: dariApp.text })}
      >
        <FaEdit />
      </button>

      <div className="text" onClick={() => setCompleted(!completed ? true : false)}>
        <span className='num'>{dariApp.num}</span>. {dariApp.text}
      </div>
      <div className="text">
        {seconds} Seconds to delete
       </div>

    </li>
  );
}

export default Thought