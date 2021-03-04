import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './Utilities';

const AddThoughtForm = ({tambah}) => {

    const [ nums, setNums ] = useState(1)
const [ text, setText ] = useState('')
 
const handleTextChange = ({target}) => {
setText(target.value)
}


const handleSubmit = (e) => {
e.preventDefault()

setNums(prev => prev + 1)

const thought = {
  id: generateId(),
  num: nums,
  text: text,
  expiresAt: getNewExpirationTime()
}
setText('')
thought.text.length > 0  ? tambah(thought) : alert(' please add text')

}
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit} >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddThoughtForm;
