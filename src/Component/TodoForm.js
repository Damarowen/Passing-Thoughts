import React, { useState, useRef, useEffect } from 'react';
import { generateId } from './Utilities';

const TodoForm = ({ tambah, edit, data }) => {

  const inputRef = useRef(null)
  const [nums, setNums] = useState(1)
  const [text, setText] = useState(edit ? edit.text : '')
  useEffect(() => {
    inputRef.current.focus()
    if (data(data).length === 0) {
      setNums(1)
    }
  }, [data])

  const handleTextChange = ({ target }) => {
    setText(target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let datax;

    if (text.length > 0) {

      if (edit) {
        datax = {
          id: generateId(),
          num: edit.num,
          text: text
        }
      } else {
        setNums(nums + 1)
        //* tambah({id, num, text, expiresAt})
        datax = {
          id: generateId(),
          num: nums,
          text: text
        }
      }

      tambah(datax)
      setText('')

    } else {
      alert(' please add text')
    }
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

export default TodoForm;
