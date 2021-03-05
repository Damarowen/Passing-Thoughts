import React, { useState } from 'react';
import AddThoughtForm from './Component/addThoughtForm';
import Thought from './Component/Thought';
// import { generateId, getNewExpirationTime } from './Component/Utilities';

const App = () => {

  const [thoughts, setThoughts] = useState([
    // {
    //   id: generateId(),
    //   num: 1,
    //   text: 'This is a place for your passing thoughts.',
    //   expiresAt: getNewExpirationTime(),
    // },
    // {
    //   id: generateId(),
    //   num: 2,
    //   text: "They'll be removed after 15 seconds.",
    //   expiresAt: getNewExpirationTime(),
    // },
  ]);


  const add = value => {
    setThoughts(prev => [value, ...prev])
  }

  const remove = id => {
    setThoughts(all =>
      all.filter(cari => cari.id !== id)
    );
  };

  const updateList = (id, newVal) => {
    {console.log(newVal)}
    setThoughts(prev => prev.map(item => item.id === id ? newVal : item))
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm tambah={add} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              dariApp={thought}
              hapus={remove}
              updateList={updateList}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App