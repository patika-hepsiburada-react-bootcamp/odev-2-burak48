import React from "react";
import { checkWin } from "../helpers/helpers";
import PropTypes from "prop-types";

const Popup = ({ correctLetters, wrongLetters, selectedWord }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "You won !!!";
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost";
    finalMessageRevealWord = `The word was: ${selectedWord}`;
  }

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
      </div>
    </div>
  );
};

Popup.propTypes = {
  correctLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  selectedWord: PropTypes.string.isRequired,
};

export default Popup;
