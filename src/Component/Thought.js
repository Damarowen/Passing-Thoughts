import React, { useEffect} from 'react';

const Thought = ({dariApp, hapus}) => {



  const handleRemoveClick = () => {
    hapus(dariApp.id);
  };

  const timeRemaining = dariApp.expiresAt - Date.now();

useEffect(() => {
  
const time = setTimeout(() => {
  alert('line will deleted')
  hapus(dariApp.id)
  }, timeRemaining)

return () => {
  clearTimeout(time)
}
}, [dariApp , hapus, timeRemaining])


  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    
      <div className="text">  <span className='num'>{dariApp.num}</span>. {dariApp.text}</div>
     <div className="text">{timeRemaining}</div>

    </li>
  );
}
 
export default Thought