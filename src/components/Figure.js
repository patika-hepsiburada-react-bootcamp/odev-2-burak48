import React from "react";
import PropTypes from "prop-types";

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <svg height="250" width="200" className="figure-container">
      {/*  Rod  */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />
      {/* Head */}
      {errors > 0 && <circle cx="140" cy="70" r="20" />}
      {/* Body */}
      {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
      {/* Arms */}
      {errors > 2 && <line x1="140" y1="100" x2="110" y2="130" />}
      {errors > 3 && <line x1="140" y1="100" x2="170" y2="130" />}
      {/* Legs */}
      {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
      {errors > 4 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
  );
};

Figure.propTypes = {
  wrongLetters: PropTypes.array.isRequired,
};

export default Figure;
