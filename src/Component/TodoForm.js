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
    let data;

    if (text.length > 0) {

      if (edit) {
        data = {
          id: generateId(),
          num: edit.num,
          text: text,
          expiresAt: getNewExpirationTime()
        }
      } else {
        setNums(prev => prev + 1)

        //* tambah({id, num, text, expiresAt})
        data = {
          id: generateId(),
          num: nums,
          text: text,
          expiresAt: getNewExpirationTime()
        }
      }

      tambah(data)

    } else {
      alert(' please add text')
    }
    console.log(nums)
    setText('')
    //* verification
    // data.text.length > 0 ? tambah(data) : 
  }

  let body, input

  body = (
    <input
      ref={inputRef}
      type="text"
      z placeholder="What's on your mind?"
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
