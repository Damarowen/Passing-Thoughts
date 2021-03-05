import React, { useEffect, useState } from 'react';
import AddThoughtForm from './addThoughtForm';


const Thought = ({ dariApp, hapus, updateList }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  })


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
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <button
        aria-label="Remove thought"
        className="edit-button"
        onClick={() => setEdit({ id: dariApp.id, text: dariApp.text })}
      >
        &hearts;
      </button>

      <div className="text">  <span className='num'>{dariApp.num}</span>. {dariApp.text}</div>

    </li>
  );
}

export default Thought