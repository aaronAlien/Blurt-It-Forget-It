import React from 'react';
import { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //alert("WHOOOSH!...");
      removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => {
      clearTimeout(timeout);
    }

  },[thought]);

  return (
    <li className="Thought p-4 m-4 rounded bg-gray-200">
      <button
        aria-label="Remove thought"
        className="remove-button box-border cursor-pointer text-sm float-right border-0 rounded bg-transparent"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
