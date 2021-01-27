import { React, useRef, useEffect } from "react";

import "../styles/DrumPad.css";

export const DrumPad = ({
  trigInfo: { trig, sound, label, bank },
  setDisplay,
}) => {
  const audioClip = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleTrig);
    return () => document.removeEventListener("keydown", handleTrig);
  });

  const makeSound = () => {
    if (audioClip.current !== null) {
      console.log(audioClip.current);
      audioClip.current.play();
      setDisplay(label);
    }
  };

  const handleTrig = (event) => {
    if (event.key.toUpperCase() === trig) {
      makeSound();
    }
  };

  const textSize = (label) => {
    if (label.length > 9) {
      return;
    }
  };

  return (
    <button
      onClick={makeSound}
      style={{
        gridArea: `${trig}`,
      }}
      id={label + bank}
      className="drum-pad"
    >
      <p id="trig-label">{trig}</p>
      <p
        style={{ fontSize: `${label.length > 9 ? ".75rem" : "1rem"}` }}
        id="drum-pad-label"
      >
        {label}
      </p>
      <audio className="clip" ref={audioClip} id={trig} src={sound} />
    </button>
  );
};
