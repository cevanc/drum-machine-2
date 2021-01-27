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

  return (
    <button
      onClick={makeSound}
      style={{
        gridArea: `${trig}`,
      }}
      id={label}
      className="drum-pad"
    >
      {trig}
      <audio className="clip" ref={audioClip} id={trig} src={sound} />
    </button>
  );
};
