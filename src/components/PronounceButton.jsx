import React from "react";
// import { Volume2 } from "lucide-react";

const PronunciationButton = ({ word }) => {
  const pronounceWord = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "es-ES"; // Spanish language setting
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* <h2 className="card-title font-bold">word: {word}</h2> */}
      <button onClick={pronounceWord} className=" btn btn-neutral">
        {/* <Volume2 size={20} /> */}
        Pronounce
      </button>
    </div>
  );
};

export default PronunciationButton;
