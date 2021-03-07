import React, { useState, useEffect } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa'
import TodoForm from './TodoForm';


const Todo = ({ dariApp, hapus, updateList, data }) => {

  const [seconds, setSeconds] = useState(15)
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

  useEffect(() => {
    //* use setInterval instead setTimeout
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
      }
      if (seconds === 1) {
        hapus(dariApp.id)
      }

    }, 1000)
    return () => {
      clearInterval(myInterval);
    };

  })

  if (edit.text) {
    return <TodoForm edit={edit} tambah={submitUpdate} data={data} />
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

export default Todo;