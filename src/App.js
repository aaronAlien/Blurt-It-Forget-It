import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddThoughtForm } from "./Components/AddThoughtsForm";
import { Thought } from "./Components/Thought";
import { generateId, getNewExpirationTime } from "./Components/Util";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts...",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds...",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "...let it out and let it pass...",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className='App max-w-2xl mx-auto my-auto w-[95%]'>
      <header className="">
        <h1 className="text-4xl font-bold text-center text-gray-50 m-6 p-2 container">
          Blurt it. Forget it.</h1>
      </header>
      <main className="bg-brown400 px-7 py-10 rounded-md ring-2 ring-gray-700 ring-opacity-40 shadow-lg">
        <AddThoughtForm addThought={addThought} />
        <ul className='thoughts list-none p-0'>
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}
