import React, { useState, useRef, useEffect } from 'react';
import { generateId, getNewExpirationTime } from './Utilities';

const AddThoughtForm = ({ tambah, edit }) => {
  const inputRef = useRef(null)
  const [nums, setNums] = useState(1)
  const [text, setText] = useState(edit ? edit.text : '')

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleTextChange = ({ target }) => {
    setText(target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(1, text)
    setNums(prev => prev + 1)
    //* tambah({id, num, text, expiresAt})
    
    const thought = {
      id: generateId(),
      num: nums,
      text: text,
      expiresAt: getNewExpirationTime()
    }
    setText('')
    //* verification
    thought.text.length > 0 ? tambah(thought) : alert(' please add text')

  }

  let body, input

  body = (
    <input
      ref={inputRef}
      type="text"
      aria-label="What's on your mind?"
      placeholder="What's on your mind?"
      value={text}
      onChange={handleTextChange}
    />
  )
  input = (
    <input type="submit" value="Add" />

  )
  if (edit) {
    body = (
      <input
        ref={inputRef}
        type="text"
        placeholder="edit"
        value={text}
        onChange={handleTextChange}
      />
    )
    input = (
      <input type="submit" value="Update" />
    )
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit} >
      {body}
      {input}
    </form>
  );
}

export default AddThoughtForm;
