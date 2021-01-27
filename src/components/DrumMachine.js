import { React, useState } from "react";
import { Display } from "./Display";
import { PadBank } from "./PadBank";
import "../styles/DrumMachine.css";

const DrumMachine = () => {
  const [bank, setBank] = useState(1);
  const [volume, setVolume] = useState(100);
  const [display, setDisplay] = useState(":> :> :>");

  return (
    <div id="drum-machine">
      <Display display={display} />
      <PadBank bank={bank} setDisplay={setDisplay} />
    </div>
  );
};

export default DrumMachine;
