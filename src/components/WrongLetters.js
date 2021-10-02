import React from "react";
import PropTypes from "prop-types";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, index) => <span key={index}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

WrongLetters.propTypes = {
  wrongLetters: PropTypes.array.isRequired,
};

export default WrongLetters;
