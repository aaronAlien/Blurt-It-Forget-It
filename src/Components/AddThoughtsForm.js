import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./Util";

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };

  const handleSubmit = (event) => {
    if (text.length > 0) {
      event.preventDefault();
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };

    props.addThought(thought);
    setText("");
    }

  };

  return (
    <form className='AddThoughtForm flex-col p-4' onSubmit={handleSubmit}>
      <input
        className='box-border p-3 border-s-black rounded flex-1 mr-2 focus:outline-none'
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type='submit' value='Add' className='add-button box-border p-3 cursor-pointer rounded-md ring-2 ring-gray-700 ring-opacity-40 shadow-lg sm:w-auto' />
    </form>
  );
}
