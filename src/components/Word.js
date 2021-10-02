import React from "react";
import PropTypes from "prop-types";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

Word.propTypes = {
  selectedWord: PropTypes.string.isRequired,
  correctLetters: PropTypes.array.isRequired,
};

export default Word;
