import React, { useState } from "react";
import "../styles/range.css";

const TextArea = ({ input, setInput }) => {
  console.log(input.length); //Надо подумать как это передавать в компонент вычисления длины (статистик)  а можно и тут оставить.

  return (
    <textarea
      className="textarea-text"
      id="message"
      placeholder="Start typing here...(or paste your text)"
      rows="10"
      cols="600"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default TextArea;
