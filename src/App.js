import React, { useState } from 'react';
import AddThoughtForm from './Component/TodoForm';
import Thought from './Component/Todo';
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
    setThoughts(prev => prev.map(item => item.id === id ? newVal : item))
  }

  return (
    <div className="App">
      <header>
        <h1>What Are You Gonna Do ?</h1>
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
              xx={thought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App