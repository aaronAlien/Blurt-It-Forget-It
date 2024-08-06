import "./App.css";
import React, { useEffect, useState } from "react";
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
    <div className='App flex h-screen justify-center items-center'>
      <div className='container max-w-2xl mx-auto p-4 md:p-6 lg:p-8'>
        <header className='flex justify-center mt-auto mb-8'>
          <h1 className='text-6xl font-bold text-white text-shadow-lg text-shadow-gray-700'>
            Blurt it. Forget it.
          </h1>
        </header>
        <main className='bg-brown400 px-7 py-10 rounded-md ring-2 ring-gray-900 ring-opacity-40 shadow-lg max-h-[60vh] overflow-y-auto'>
          <AddThoughtForm addThought={addThought} />
          <ul className='thoughts list-none p-0'>
            {thoughts.map((thought) => (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
